import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import styles from "../../../../styles/profile.module.scss"

const UserForm = function () {
    return (
        <>
            <Form className={styles.form}>
                <div className={styles.formName}>
                    <p className={styles.nameAbbreviation}>GF</p>
                    <p className={styles.userName}>Gabriel Fonseca</p>
                </div>
                <div className={styles.memberTime}>
                    <img 
                        src="/profile/iconUserAccount.svg" 
                        alt="iconProfile" 
                        className={styles.memberTimeImg} 
                    />
                    <p className={styles.memberTimeText}>Membro desde <br /> 20 de Abril de 2022</p>
                </div>
                <hr />
                <div className={styles.inputFlexDiv}>
                    <FormGroup>
                        <Label className={styles.label} for="firstName">
                            Nome
                        </Label>
                        <Input 
                            name="firstName"
                            type="text"
                            id="firstName"
                            placeholder="Qual o seu nome?"
                            required
                            maxLength={20}
                            className={styles.inputFlex}
                            value={"Name"}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label className={styles.label} for="lastName">
                            Sobrenome
                        </Label>
                        <Input 
                            name="lastName"
                            type="text"
                            id="lastName"
                            placeholder="Qual o seu sobrenome?"
                            required
                            maxLength={20}
                            className={styles.inputFlex}
                            value={"Sobrenome"}
                        />
                    </FormGroup>
                </div>
                <div className={styles.inputNormalDiv}>
                    <FormGroup>
                        <Label className={styles.label} for="phone">
                            Telefone
                        </Label>
                        <Input 
                            name="phone"
                            type="tel"
                            id="phone"
                            placeholder="(xx) xxxxx-xxxx?"
                            required
                            className={styles.input}
                            value={"+55 (21) 99999-9999"}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label className={styles.label} for="email">
                            E-mail
                        </Label>
                        <Input 
                            name="email"
                            type="email"
                            id="email"
                            placeholder="Qual o seu e-mail?"
                            required
                            maxLength={20}
                            className={styles.input}
                            value={"teste@gmail.com"}
                        />
                    </FormGroup>
                    
                    <Button className={styles.formBtn} outline type="submit">
                        Salvar alterações
                    </Button>
                </div>                
            </Form>
        </>
    )
}

export default UserForm;