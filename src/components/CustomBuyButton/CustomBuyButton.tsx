import { BuyButton, ButtonProps } from '@faststore/ui';
import { Icon } from '@faststore/ui';
import { usePDP } from "@faststore/core";

import { gql } from '@faststore/core/api';
import { useQuery_unstable as useQuery } from '@faststore/core/experimental';

const query = gql(`
  query Extra {
    extra {
      message
    }
  }
`);

export const CustomBuyButton = (props: ButtonProps) => {

  // Example 1: Getting data from existing
  // query extension 
  const { data } = usePDP();
  const { product } = data;

  // Example 2: Getting data from custom query
  const { data: extraData, isValidating } = useQuery(query, {});

  if (isValidating) return;

  const { extra } = extraData;

  return (
    <>
      <BuyButton {...props}
        icon={<Icon name="PlusCircle"/>}
        variant="primary"
        onClick={(event) => {
          alert('This is a custom alert');
          props.onClick?.(event);
        }}
      >
        { product.customData }
      </BuyButton>

      <h1>
        { extra.message }
      </h1>
    </>
  );
}
