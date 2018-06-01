import checkDiscovery from "./discovery";
import checkFetch from "./fetch";
import checkTravis from "./travis";
import checkLogs from "./logs";

export default [
  checkDiscovery,
  checkFetch,
  checkLogs,
  checkTravis("Integration Tests", "travisIntTest"),
  checkTravis("Query Build", "travisQuery"),
  checkTravis("Siphon Build", "travisSiphon")
];
