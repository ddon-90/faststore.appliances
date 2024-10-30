import { gql } from "@faststore/core/api";
import { execute_unstable as execute } from "@faststore/core/experimental/server";

const query = gql(`
  query ServerDynamicContent {
    extra {
      message
    }
  }
`);

const fetchDataUsingApiExtension = async () => {
  try {
    const result = await execute({
      variables: {},
      operation: query,
    });

    console.log(result.data);

    return { data: result.data };
  } catch (error) {
    return { data: null, errors: ["Error fetching data from API Extensions"] };
  }
}

// Map slugs to data-fetching functions
const dynamicContent = {
  "home": fetchDataUsingApiExtension,
};

export default dynamicContent;
