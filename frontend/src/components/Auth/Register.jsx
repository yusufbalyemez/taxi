import { useState } from "react"
import { message } from 'antd';
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [password2, setPassword2] = useState(""); //2. password bilgisini alır.
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
    });

    const navigate = useNavigate();
    const apiUrl = import.meta.env.VITE_API_BASE_URL;

    const handleInputChanged = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setPassword2(e.target.value); //içerisine bilgi yazıldığında
    }

    const handleRegister = async (e) => {
        e.preventDefault();


        if (formData.password !== password2) {
            message.error("Şifreler uyuşmuyor. Lütfen tekrar deneyin.");
            return; // Şifreler uyuşmuyorsa işlemi sonlandır
        }

        try {
            const response = await fetch(`${apiUrl}/api/auth/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {

                const data = await response.json();
                // const { password, ...rest } = data;
                localStorage.setItem("user", JSON.stringify(data));
                message.success("Kayıt başarılı.");
                // navigate("/");
                // window.location.href = "/"


                // Reset form data and password2 state
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    password: "",
                });
                setPassword2("");


            } else {
                message.error("Kayıt başarısız.");
            }
        } catch (error) {
            console.log("Giriş hatası", error);
        }
    }

    return (
        <div className="account-column">
            <h2>Register</h2>
            <form onSubmit={handleRegister}>
                <div>
                    <label>
                        <span>Username <span className="required">*</span></span>
                        <input type="text" name="name" value={formData.name} onChange={handleInputChanged} />
                    </label>
                </div>
                <div>
                    <label>
                        <span>Email address <span className="required">*</span></span>
                        <input type="email" name="email" value={formData.email} onChange={handleInputChanged} />
                    </label>
                </div>
                <div>
                    <label>
                        <span>Phone <span className="required">*</span></span>
                        <input type="text" name="phone" value={formData.phone} onChange={handleInputChanged} />
                    </label>
                </div>
                <div>
                    <label>
                        <span>Password <span className="required">*</span></span>
                        <input type="password" name="password" value={formData.password} onChange={handleInputChanged} />
                    </label>
                </div>
                <div>
                    <label>
                        <span>Password2 <span className="required">*</span></span>
                        <input type="password" name="password2" value={password2} onChange={handleInputChanged} />
                    </label>
                </div>
                <div className="privacy-policy-text remember">
                    <p>
                        Your personal data will be used to support your experience throughout this website, to
                        manage access to your account, and for other purposes described in our <a
                            href="#">privacy policy.</a>
                    </p>
                    <button className="btn btn-sm">Register</button>
                </div>
            </form>
        </div>
    )
}

export default Register
