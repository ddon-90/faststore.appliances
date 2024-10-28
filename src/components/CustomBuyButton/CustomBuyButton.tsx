import { BuyButton, ButtonProps } from '@faststore/ui';
import { Icon } from '@faststore/ui';

export const CustomBuyButton = (props: ButtonProps) => {
  return (
    <BuyButton {...props}
      icon={<Icon name="PlusCircle"/>}
      variant="primary"
      onClick={(event) => {
        alert('This is a custom alert');
        props.onClick?.(event);
      }}
    >
      Custom Button
    </BuyButton>
  );
}
