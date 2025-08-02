import { gql } from "@apollo/client";

export const GET_ALL_BRANDS = gql`
  query getAll {
    findAllBrands {
      id
      name
      origin
      image
      categories
      models {
        id
        name
      }
    }
  }
`;
