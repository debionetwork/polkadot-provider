import { returnToHumanMockWithParam, toHumanMock } from "../../../@polkadot-types.mock";

export const geneticData = {
  geneticDataById(param) {
    return returnToHumanMockWithParam(param);
  },
  geneticDataByOwner(param) {
    return returnToHumanMockWithParam(param);
  },
  geneticDataCountByOwner(param) {
    return returnToHumanMockWithParam(param);
  },
  geneticDataCount() {
    return toHumanMock;
  }
}