import React, { createContext, useContext, ReactNode, useState } from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import * as authApi from "../api/authApi";
import { User } from "../types/User";
import { Credentials } from "../types/Credentials";

interface AuthContextType {
	user: User | null;
	isLoading: boolean;
	isError: boolean;
	error: null | string | Error;
	login: (credentials: Credentials) => void;
	logout: () => void;
	refetchUser: () => void;
	setError: (error: Error | null) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
	children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
	const queryClient = useQueryClient();
	const [authError, setAuthError] = useState<Error | null>(null);

	const { data, isLoading, isError, error, refetch } = useQuery<User[], Error>(
		"currentUser",
		authApi.getCurrentUser,
		{
			retry: false,
			onSuccess: (fetchedUser) => {
				if (fetchedUser) {
					queryClient.setQueryData("currentUser", fetchedUser);
				} else {
					queryClient.setQueryData("currentUser", null);
				}
				setAuthError(null);
			},
			onError: (queryError) => {
				setAuthError(queryError);
			},
			refetchOnWindowFocus: false,
			refetchInterval: false,
		}
	);

	const loginMutation = useMutation<User, Error, Credentials>(authApi.login, {
		onSuccess: () => {
			queryClient.invalidateQueries("currentUser");
			setAuthError(null);
		},
		onError: (error) => {
			console.error("Login error:", error);
			setAuthError(error);
		},
	});

	const logoutMutation = useMutation<void, Error, string>(authApi.logout, {
		onSuccess: () => {
			queryClient.setQueryData("currentUser", null);
			queryClient.invalidateQueries("currentUser");
			setAuthError(null);
		},
		onError: (error) => {
			console.error("Logout error:", error);
			setAuthError(error);
		},
	});

	const login = (credentials: Credentials) => loginMutation.mutateAsync(credentials);

	const logout = () => {
		if (data && data[0]) {
			logoutMutation.mutate(data[0].id);
		}
	};

	const user = Array.isArray(data) && data.length > 0 ? data[0] : null;

	return (
		<AuthContext.Provider
			value={{
				user: user,
				isLoading,
				isError: isError || !!authError,
				error: authError || error,
				login,
				logout,
				refetchUser: refetch,
				setError: setAuthError,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = (): AuthContextType => {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error("useAuth must be used within an AuthProvider");
	}
	return context;
};
