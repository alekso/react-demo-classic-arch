import { FeatureContainer } from "./styles";

export default function Feature({ feature }: { feature: string }) {
	return <FeatureContainer>{feature}</FeatureContainer>;
}
