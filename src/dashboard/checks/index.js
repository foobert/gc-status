import checkDiscovery from "./discovery";
import checkFetch from "./fetch";
import checkTravis from "./travis";

export default [
  checkDiscovery,
  checkFetch,
  checkTravis("Integration Tests", "travisIntTest"),
  checkTravis("Query Build", "travisQuery"),
  checkTravis("Siphon Build", "travisSiphon")
];
