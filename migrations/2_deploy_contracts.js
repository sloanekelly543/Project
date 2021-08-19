const IterableMapping = artifacts.require("IterableMapping");
const Generator = artifacts.require("Generator");

module.exports = function(deployer) {
  deployer.deploy(IterableMapping);
  deployer.link(IterableMapping, Generator);
  deployer.deploy(Generator);
};