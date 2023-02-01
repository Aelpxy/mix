const loader = ({ src, width, quality }: any) => {
  if (!quality) {
    quality = 75;
  }
  return `https://optimiser.velta.workers.dev?width=${width}&quality=${quality}&image=${src}`;
};

export default loader;
