import React from "react";
import Button from "../../components/Button/Button";
import styled from "styled-components";
import { useWalletModal } from "../WalletModal";
import { Login } from "../WalletModal/types";

const StyledButton = styled(Button)`
  // color: #fff;
`;

interface Props {
  account?: string;
  login: Login;
  logout: () => void;
}

const UserBlock: React.FC<Props> = ({ account, login, logout }) => {
  const { onPresentConnectModal, onPresentAccountModal } = useWalletModal(login, logout, account);
  const accountEllipsis = account ? `${account.substring(0, 4)}...${account.substring(account.length - 4)}` : null;
  return (
    <div>
      {account ? (
        <StyledButton
          size="md"
          variant="tertiary"
          color="secondary"
          onClick={() => {
            onPresentAccountModal();
          }}
        >
          {accountEllipsis}
        </StyledButton>
      ) : (
        <StyledButton
          size="md"
          variant="tertiary"
          color="secondary"
          onClick={() => {
            onPresentConnectModal();
          }}
        >
          Connect
        </StyledButton>
      )}
    </div>
  );
};

export default UserBlock;
