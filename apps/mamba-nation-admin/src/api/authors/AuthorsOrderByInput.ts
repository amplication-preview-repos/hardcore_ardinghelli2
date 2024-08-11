import { SortOrder } from "../../util/SortOrder";

export type AuthorsOrderByInput = {
  bio?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  profilePicture?: SortOrder;
  updatedAt?: SortOrder;
};
