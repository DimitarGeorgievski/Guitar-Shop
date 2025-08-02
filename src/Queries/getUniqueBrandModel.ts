import { gql } from "@apollo/client";

export const GET_UNIQUE_BRAND_MODEL = gql`
  query getUniqueBrand($id: ID!) {
    findUniqueBrand(id: $id) {
      id
      name
      origin
      image
      categories
      models {
        id
        name
        type
        image
        description
        price
        specs {
          bodyWood
          neckWood
          fingerboardWood
          pickups
          tuners
          scaleLength
          bridge
        }
        musicians {
          name
          musicianImage
          bands
        }
      }
    }
  }
`;