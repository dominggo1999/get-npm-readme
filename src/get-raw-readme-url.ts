const getRawReadmeUrl = (url: string) => {
  return (
    url.replace("github.com", "raw.githubusercontent.com") + "/master/README.md"
  );
};

export default getRawReadmeUrl;
