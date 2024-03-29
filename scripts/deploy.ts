import hre from "hardhat";

async function main() {
  const bitmapPixelArtCreatorV1 = await hre.viem.deployContract(
    "BitmapPixelArtCreatorV1",
  );
  console.log(
    `BitmapPixelArtCreatorV1 deployed to ${bitmapPixelArtCreatorV1.address}`,
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
