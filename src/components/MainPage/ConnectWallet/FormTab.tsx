import { useEffect, useState } from "react";
import {
  Box,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  useTheme,
  Snackbar,
  Alert,
} from "@mui/material";
import { useAccount, useChainId, useSwitchChain, useDisconnect } from "wagmi";
import { getAccount } from "@wagmi/core";
import "../../modal/style.css";
import { handleDeRandFeeManager } from "../../../helper/handleDeRandFeeManagerTx";
import { config } from "../../walletConnect/wagmi";
import { checkApprove } from "../../../helper/checkApprove";
import { approve } from "../../../helper/approve";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { isAddress } from "viem";

const RenderDepositFeesForm = () => {
  const [formValues, setFormValues] = useState({
    dAppContract: "",
    executor: "executor1",
    PIONAmount: "",
    chainId: "",
  });
  const [pionAmountError, setPionAmountError] = useState("");
  const [chainIdError, setChainIdError] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  // const [snackbarMessage, setSnackbarMessage] = useState("");
  const snackbarMessage = "";
  const [isFormValid, setIsFormValid] = useState(false);
  const [isApproved, setIsApproved] = useState(false);
  const { isConnected, chainId } = useAccount();
  const [approveLoading, setApproveLoading] = useState(false);
  const [depositLoading, setDepositLoading] = useState(false);
  const [allowance, setAllowance] = useState(0);
  const account = getAccount(config);
  const validChain = useChainId({ config });
  const [isRightChain, setIsRightChain] = useState(false);
  const { open } = useWeb3Modal();
  const { switchChain } = useSwitchChain();
  const { disconnect } = useDisconnect();

  const theme = useTheme();

  const validatePIONAmount = (value: any) => {
    const number = parseFloat(value);
    return /^[0-9]+(\.[0-9]+)?$/.test(value) && number > 0;
  };

  const handleFormChange = (prop: any) => (event: any) => {
    const { value } = event.target;
    if (prop === "PIONAmount") {
      if (validatePIONAmount(value) || value === "") {
        setPionAmountError("");
      } else {
        setPionAmountError("Invalid amount.");
      }
    } else if (prop === "chainId") {
      if (/^[1-9]\d*$/.test(value) || value === "") {
        setChainIdError("");
      } else {
        setChainIdError("Chain ID must be a integer.");
      }
    }

    setFormValues({ ...formValues, [prop]: value });
  };

  const handleSendTransaction = async () => {
    setDepositLoading(true);
    await handleDeRandFeeManager(formValues);
    setDepositLoading(false);
    await handleCheckApprove();
  };

  const handleCheckApprove = async () => {
    const res = await checkApprove();
    setAllowance(res as any);
    if (Number(res) === 0 || Number(res) < Number(formValues.PIONAmount)) {
      setIsApproved(false);
    } else if ((res as any) >= Number(formValues.PIONAmount)) {
      setIsApproved(true);
    }
  };

  const validateForm = () => {
    const isValidDAppContract = isAddress(formValues.dAppContract);
    const isValidPIONAmount = validatePIONAmount(formValues.PIONAmount);
    const isValidChainId = /^[1-9]\d*$/.test(formValues.chainId);
    const isValidExecutor = formValues.executor.length > 0;

    return (
      isValidDAppContract &&
      isValidPIONAmount &&
      isValidChainId &&
      isValidExecutor
    );
  };

  const handleApprove = async () => {
    const isValid = validateForm() && isFormValid;

    if (!isValid) {
      alert("Please ensure all form fields are correctly filled.");
      return;
    }
    setApproveLoading(true);
    try {
      await approve(formValues);
      await handleCheckApprove();
    } catch (error) {
      console.error("Approval failed:", error);
    } finally {
      setApproveLoading(false);
    }
  };

  useEffect(() => {
    if (!account.address) return;
    handleCheckApprove();
    setIsRightChain(chainId === validChain);
  }, [account.address, chainId, validChain]);

  useEffect(() => {
    setIsFormValid(validateForm());
  }, [formValues]);

  useEffect(() => {
    if (!formValues.PIONAmount) return;
    setIsApproved(allowance >= Number(formValues.PIONAmount));
  }, [formValues.PIONAmount]);

  const textFieldStyle = {
    "& .MuiOutlinedInput-root": {
      color: "#E4E4E4",
      "& fieldset": { borderColor: "#454D93" },
      "&:hover fieldset": { borderColor: "#454D93" },
      "&.Mui-focused fieldset": { borderColor: "#454D93" },
    },
    "& .MuiInputLabel-root": { color: "#E6E6E6" },
    width: "100%",
    maxWidth: "407px",
    m: 1,
  };

  const formControlStyle = {
    m: 1,
    width: "100%",
    color: "#E4E4E4",
    maxWidth: "407px",
    "& .MuiOutlinedInput-root": {
      "& fieldset": { borderColor: "#454D93" },
      "&:hover fieldset": { borderColor: "#454D93" },
      "&.Mui-focused fieldset": { borderColor: "#454D93" },
    },
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: 2,
        width: "100%",
        padding: theme.spacing(2),
        boxSizing: "border-box",
      }}
    >
      {/* Form fields */}
      <TextField
        label="dApp Contract"
        variant="outlined"
        value={formValues.dAppContract}
        onChange={handleFormChange("dAppContract")}
        error={
          !!formValues.dAppContract &&
          !/^0x[a-fA-F0-9]{40}$/.test(formValues.dAppContract)
        }
        helperText={
          formValues.dAppContract &&
          !/^0x[a-fA-F0-9]{40}$/.test(formValues.dAppContract)
            ? "Invalid Contract address."
            : ""
        }
        sx={textFieldStyle}
        InputLabelProps={{ shrink: true }}
        placeholder="dApp Contract"
        autoComplete="off"
      />
      <FormControl sx={formControlStyle}>
        <InputLabel shrink sx={{ color: "#E6E6E6" }}>
          Executor
        </InputLabel>
        <Select
          value={formValues.executor}
          label="Executor"
          onChange={handleFormChange("executor")}
          sx={{
            color: "#E6E6E6",
            "& .MuiSvgIcon-root": {
              color: "#E4E4E4",
            },
          }}
          MenuProps={{
            PaperProps: { style: { maxHeight: "50vh", color: "#454D93" } },
          }}
        >
          <MenuItem value="executor1">DeRand Executor</MenuItem>
        </Select>
      </FormControl>
      <TextField
        label="PION Amount"
        variant="outlined"
        value={formValues.PIONAmount}
        onChange={handleFormChange("PIONAmount")}
        error={!!pionAmountError}
        helperText={pionAmountError}
        sx={textFieldStyle}
        InputLabelProps={{ shrink: true }}
        autoComplete="off"
      />
      <TextField
        label="Chain ID"
        variant="outlined"
        value={formValues.chainId}
        onChange={handleFormChange("chainId")}
        error={!!chainIdError}
        helperText={chainIdError}
        sx={textFieldStyle}
        InputLabelProps={{ shrink: true }}
        placeholder="Chain Id"
        autoComplete="off"
      />
      {!isConnected && (
        <Button
          variant="contained"
          sx={{
            mt: 2,
            width: "100%",
            maxWidth: "407px",
            height: "50px",
            bgcolor: "#413989",
            "&:hover": {
              bgcolor: "#413989",
              boxShadow: "none",
            },
          }}
          onClick={() => open()}
        >
          Connect Wallet
        </Button>
      )}

      {isConnected && !isApproved && isRightChain && (
        <Button
          variant="contained"
          sx={{
            mt: 2,
            width: "100%",
            maxWidth: "407px",
            height: "50px",
            bgcolor: "#413989",
            "&:hover": {
              bgcolor: "#413989",
              boxShadow: "none",
            },
          }}
          onClick={() => handleApprove()}
        >
          {approveLoading ? "Approving..." : "Approve"}
          <img
            alt="disconnect"
            className="disconnect-btn"
            src="assets/logout.png"
            height="20px"
            width="20px"
            onClick={() => disconnect()}
          />
        </Button>
      )}

      {!isRightChain && isConnected && (
        <Button
          variant="contained"
          sx={{
            mt: 2,
            width: "100%",
            maxWidth: "407px",
            height: "50px",
            bgcolor: "#413989",
            "&:hover": {
              bgcolor: "#413989",
              boxShadow: "none",
            },
          }}
          onClick={() => switchChain({ chainId: validChain })}
        >
          Switch Network
          <img
            alt="disconnect"
            className="disconnect-btn"
            src="/logout.png"
            height="20px"
            width="20px"
            onClick={() => disconnect()}
          />
        </Button>
      )}

      {isConnected && isApproved && isRightChain && (
        <Button
          variant="contained"
          sx={{
            mt: 2,
            position: "relative",
            width: "100%",
            maxWidth: "407px",
            height: "50px",
            bgcolor: "#413989",
            color: "#DEDEDE",
            "&:hover": {
              bgcolor: "#413989",
              boxShadow: "none",
            },
            "&.Mui-disabled": {
              bgcolor: "rgba(65,57,137,0.5)",
              color: "#DEDEDE",
              ".disconnect-btn": {
                opacity: 0.5,
              },
            },
          }}
          onClick={() => handleSendTransaction()}
          disabled={
            !isFormValid ||
            depositLoading ||
            !validatePIONAmount(formValues.PIONAmount)
          }
        >
          {depositLoading ? "Deposit..." : "Deposit"}
          <img
            alt="disconnect"
            className="disconnect-btn"
            src="/logout.png"
            height="20px"
            width="20px"
            onClick={(e) => {
              e.stopPropagation();
              disconnect();
            }}
          />
        </Button>
      )}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={() => setSnackbarOpen(false)}
      >
        <Alert
          onClose={() => setSnackbarOpen(false)}
          severity="warning"
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default RenderDepositFeesForm;
