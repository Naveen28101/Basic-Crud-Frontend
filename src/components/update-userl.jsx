import { useState } from "react";
import { Form, useNavigate } from "react-router-dom";
import { updateUser, getAllusers } from "../service/api";
import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Typography,
  styled,
  Button,
} from "@mui/material";
import toast, { Toaster } from "react-hot-toast";

const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto;
  & > div {
    margin-top: 20px;
  }
`;

const defaultValue = {
  name: "",
  username: "",
  email: "",
  phone: "",
};

const UpdateUser = ({ id, clicked, setClicked }) => {
  const [user, setUser] = useState(defaultValue);
  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const updateUserDetail = async () => {
    console.log(id);
    console.log("Upaate user clicked");
    const res = await updateUser(id, user);
    await getAllusers()
      .then((res) => {
        cancelHandler();
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(res);
  };
  const cancelHandler = () => {
    setClicked((clicked) => !clicked);
  };

  return (
    <Container>
      <Typography variant="h4">Update User</Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="name" />
      </FormControl>

      <FormControl>
        <InputLabel>User Name</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="username" />
      </FormControl>

      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="email" />
      </FormControl>

      <FormControl>
        <InputLabel>Phone</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="phone" />
      </FormControl>

      <FormControl>
        <Button variant="contained" onClick={() => updateUserDetail()}>
          update User
        </Button>
      </FormControl>
      <FormControl>
        <Button variant="contained" onClick={cancelHandler}>
          Cancel
        </Button>
      </FormControl>
      <Toaster />
    </Container>
  );
};

export default UpdateUser;
