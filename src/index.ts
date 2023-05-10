import getPackageGithubUrl from "~/get-package-github-url";
import getRawReadmeUrl from "./get-raw-readme-url";

const packageGithubUrl = await getPackageGithubUrl("react-fast-marquee");

console.log(getRawReadmeUrl(packageGithubUrl));
