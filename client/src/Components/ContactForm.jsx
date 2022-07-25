import { Avatar, Box, Button, Container, Grid, Modal, TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { CheckCircleOutlined } from "@mui/icons-material";

const CssTextField = styled(TextField)({
    "& label": {
        color: "#a4acc4",
    },
    "& label.Mui-focused": {
      color: "#a4acc4",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#a4acc4",
    },
    "& .MuiOutlinedInput-root": {
        color: "#a4acc4",
      "& fieldset": {
        borderColor: "#a4acc4",
      },
      "&:hover fieldset": {
        borderColor: "#a4acc4",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#a4acc4",
      },
    },
    "& .MuiInputBase-multiline ": {
        color: "#a4acc4",
    },
    "& .MuiFilledInput-underline:before": {
        borderBottomColor: "#a4acc4",
    },
    "& .MuiFilledInput-underline:after": {
        borderBottomColor: "#a4acc4",
    }
});

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 300,
    bgcolor: "background.paper",
    border: "1px solid #fff !important",
    outline: "none",
    borderRadius: "5px",
    boxShadow: 24,
    p: 2,
    "@media screen and (min-width: 600px)" : { // eslint-disable-line no-useless-computed-key
        width: 400,
        p: 5
    }
};

const text = {
    mt: 2, color: "#353839", fontSize: "14px",
    textAlign: "center",
    "@media screen and (min-width: 600px)" : { // eslint-disable-line no-useless-computed-key
        fontSize: "16px"
    }
};

function ContactForm() {
    const form = useRef();
    const [done, setDone] = useState(false);
    const [open, setOpen] = useState(false);

    const handleClose = () => setOpen(false);

    useEffect(() => {
        setTimeout(() => {
            setOpen(true)
        }, 1000)
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm("service_dp2ww59", "template_nmw7o28", form.current, "1eqF9O-qMpS98ZAiq")
        .then((result) => {
            console.log(result.text);
            setDone(true);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    };


    return (
        <Container component="main" maxWidth="md">
            {done && 
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Avatar style={{backgroundColor: "#3CCF4E"}}>
                            <CheckCircleOutlined style={{color: "white"}} />
                        </Avatar>
                        <Typography id="modal-modal-description" sx={text}>
                            Thank you for reaching out to me. <br /> I sincerely appreciate your effort. Stay connected as you will be hearing from me soon!
                        </Typography>
                    </Box>
                </Modal>           
            }
            <Box component="form" sx={{ mt: 5, overflowX: "hidden" }} ref={form} onSubmit={sendEmail} data-aos="zoom-in">
                <Grid container spacing={2}>

                    {/* NAME INPUT SECTION!!! */}
                    <Grid xs={12} sm={6}>
                        <CssTextField
                            name="user_name"
                            required
                            fullWidth
                            label="Full Name" 
                            variant="outlined" 
                            type="text"
                            sx={{ m: 2, pr: 2 }}
                        />
                    </Grid>

                    {/* EMAIL INPUT SECTION!!! */}
                    <Grid xs={12} sm={6}>
                        <CssTextField
                            name="user_email"
                            required
                            fullWidth
                            label="Your@email.com" 
                            variant="outlined" 
                            type="email"
                            sx={{ m: 2, pr: 2 }}
                        />
                    </Grid>

                    {/* MOBILE INPUT SECTION!!! */}
                    <Grid xs={12} sm={6}>
                        <CssTextField
                            name="user_subject"
                            required
                            fullWidth
                            label="Mobile No" 
                            type="number"
                            sx={{ m: 2, pr: 2 }}
                        />
                    </Grid>

                    {/* SUBJECT INPUT SECTION!!! */}
                    <Grid xs={12} sm={6}>
                        <CssTextField
                            name="user_subject"
                            required
                            fullWidth
                            label="Subject" 
                            variant="outlined" 
                            type="text"
                            sx={{ m: 2, pr: 2 }}
                        />
                    </Grid>

                    {/* MESSAGE INPUT SECTION!!! */}
                    <Grid xs={12}>
                        <CssTextField
                            name="message"
                            required
                            fullWidth
                            label="Your Message"
                            placeholder="Write here..."
                            multiline
                            variant="filled"
                            sx={{ m: 2, pr: 2 }}
                        />                   
                    </Grid>
                </Grid>

                {/* SUBMIT BUTTON SECTION!!! */}
                <Box style={{ textAlign: "end" }}>
                    <Button
                        type="submit"
                        aria-label="contact form"
                        variant="contained"
                        sx={{ mt: 2, pr: 2 }}
                    >
                        Submit
                    </Button>

                </Box>
            </Box>
        </Container>
    )
}

export default ContactForm;