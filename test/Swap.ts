import {
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("Swap", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployOneYearLockFixture() {
  
    const token1 = await ethers.deployContract("Token1", {});
    const token2 = await ethers.deployContract("Token2", {});
    const swapper = await ethers.deployContract("Swapper", {});
  

    return { token1, token2, swapper};
  }

  describe("Deployment", function () {
    it("Token 1 Should Deploy", async function () {
      const Token1 = await ethers.deployContract("Token1");
      await Token1.waitForDeployment();


      expect(Token1.target).to.not.equal(0);
    });

    it("Token 2 Should Deploy", async function () {
      const Token2 = await ethers.deployContract("Token2");
      await Token2.waitForDeployment();


      expect(Token2.target).to.not.equal(0);
    });

    it("Token 1 Should Deploy", async function () {
      const Token1 = await ethers.deployContract("Token1");
      await Token1.waitForDeployment();

      const Token2 = await ethers.deployContract("Token2");
      await Token2.waitForDeployment();

      const swap = await ethers.deployContract("Swapper", [Token1.target, Token2.target]);
      await swap.waitForDeployment();


      expect(swap.target).to.not.equal(0);
    });

  });

});