import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import styles from "../../../../styles/profile.module.scss"
import { FormEvent, useEffect, useState } from "react";
import profileService from "../../../services/profileService";
import ToastComponent from "../../../components/common/toast";

const PasswordForm = function () {
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmNewPassword, setConfirmNewPassword] = useState("");
    const [color, setColor] = useState("");
    const [toastIsOpen, setToastIsOpen] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        profileService.fetchCurrent().then((password) => {
            setCurrentPassword(password.currentPassword);
            setNewPassword(password.newPassword);
        });
    }, []);

    const handlePasswordUpdate = async function (event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (newPassword != confirmNewPassword){
            setToastIsOpen(true);
            setErrorMessage("As senhas não conferem.");
            setColor("bg-danger");
            setTimeout(() => {setToastIsOpen(false)}, 1000 * 3); 
        
            return;
        }

        if (currentPassword === newPassword) {
            setToastIsOpen(true);
            setErrorMessage("A nova senha não pode ser igual a anterior!");
            setColor("bg-danger");
            setTimeout(() => {setToastIsOpen(false)}, 1000 * 3);

            return;
        }

        const res = await profileService.passwordUpdate({
            currentPassword, 
            newPassword
        });

        if(res === 204){
            setToastIsOpen(true);
            setErrorMessage("Senha alterada com sucesso!");
            setColor("bg-success");
            setTimeout(() => {
                setToastIsOpen(false);
            }, 1000 * 3); 
        
            setCurrentPassword("");
            setNewPassword("");
            setConfirmNewPassword("");

            return
        }

        if(res === 400){
            setToastIsOpen(true);
            setErrorMessage("Senha atual incorreta.");
            setColor("bg-danger");
            setTimeout(() => {setToastIsOpen(false);
            }, 1000 * 3); 

            setCurrentPassword("");
            setNewPassword("");
            setConfirmNewPassword("");

            return
        }
    };

    return (
        <>
            <Form onSubmit={handlePasswordUpdate} className={styles.form}>
                <div className={styles.inputNormalDiv}>
                    <FormGroup>
                        <Label className={styles.label} for="currentPassword">
                            Senha Atual
                        </Label>
                        <Input 
                            name="currentPassword"
                            type="password"
                            id="currentPassword"
                            placeholder="***********"
                            required
                            minLength={8}
                            maxLength={14}
                            value={currentPassword}
                            onChange={(event) => {
                                setCurrentPassword(event.currentTarget.value);
                            }}
                            className={styles.input}
                        />
                    </FormGroup>
                </div>
                <div className={styles.inputFlexDiv}>
                    <FormGroup>
                        <Label className={styles.label} for="newPassword">
                            Nova senha
                        </Label>
                        <Input 
                            name="newPassword"
                            type="password"
                            id="newPassword"
                            placeholder="***********"
                            required
                            minLength={8}
                            maxLength={14}
                            value={newPassword}
                            onChange={(event) => {
                                setNewPassword(event.currentTarget.value);
                            }}
                            className={styles.inputFlex}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label className={styles.label} for="confirmPassword">
                            Confirmar nova senha?
                        </Label>
                        <Input 
                            name="confirmPassword"
                            type="password"
                            id="confirmPassword"
                            placeholder="***********"
                            required
                            minLength={8}
                            maxLength={14}
                            value={confirmNewPassword}
                            onChange={(event) => {
                                setConfirmNewPassword(event.currentTarget.value);
                            }}
                            className={styles.inputFlex}                            
                        />
                    </FormGroup>

                </div>                
                <Button className={styles.formBtn} outline type="submit">
                        Salvar alterações?
                    </Button>                
            </Form>
            <ToastComponent color={color} isOpen={toastIsOpen} message={errorMessage} />
        </>
    );
};

export default PasswordForm;