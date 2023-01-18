import {
  MediaRenderer,
  useContract,
  useContractMetadata,
  Web3Button,
} from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";

const Home = () => {
  const { contract: nftDrop } = useContract("YOUR_DROP_ADDRESS");
  const { data: contractMetadata, isLoading } = useContractMetadata(nftDrop);

  if (isLoading) {
    return <div className={styles.container}>Loading...</div>;
  }

  return (
    <div className={styles.container}>
    
      <MediaRenderer
        src={contractMetadata.image}
        alt={contractMetadata.name}
        style={{
          width: "200px",
        }}
      />
      
      <p>{contractMetadata.name}</p>
      
      <Web3Button
        contractAddress={"YOUR_DROP_ADDRESS"}
        action={(contract) => contract.erc721.claim(1)}
        onSuccess={() => alert("Claimed!")}
        onError={(error) => alert(error.message)}
      >
        Claim NFT
      </Web3Button>
      
    </div>
  );
};

export default Home;