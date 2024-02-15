import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import styles from "../../../../styles/profile.module.scss"

const PasswordForm = function () {
    return (
        <>
            <Form className={styles.form}>
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
                            className={styles.inputFlex}
                        />
                    </FormGroup>

                </div>
                
                <Button className={styles.formBtn} outline>
                        Salvar alterações?
                    </Button>                
            </Form>
        </>
    );
};

export default PasswordForm;