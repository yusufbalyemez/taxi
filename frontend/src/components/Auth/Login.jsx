import { useState } from "react"
import { useLanguage } from '../Languages/LanguageContext'; // useLanguage hook'unu içe aktarın
import { useNavigate } from "react-router-dom";
import { message } from 'antd'; // Ant Design'dan message kullanıyoruz

const Login = () => {
    
    const { language } = useLanguage(); // Dil bağlamından dil bilgisini al
    const text = language.authpage; // Navbar metinlerine erişim

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const navigate = useNavigate();
    const apiUrl = import.meta.env.VITE_API_BASE_URL;

    const handleInputChanged = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${apiUrl}/api/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                const data = await response.json();
                localStorage.setItem("token", data.token); // Token'ı localStorage'a kaydediyoruz
                message.success(text.loginSuccess);

                if (data.user.role === "admin") {
                    navigate("/admin");
                } else {
                    navigate("/");
                }
            } else {
                message.error(text.loginFailed);
            }
        } catch (error) {
            message.error(text.failError);
        }
    }

    return (
        <div className="account-column">
            <h2>{text.title}</h2>
            <form onSubmit={handleLogin}>
                <div>
                    <label>
                        <span>{text.emailTitle}<span className="required">*</span></span>
                        <input type="text" name="email" onChange={handleInputChanged} />
                    </label>
                </div>
                <div>
                    <label>
                        <span>{text.passwordTitle} <span className="required">*</span></span>
                        <input type="password" name="password" onChange={handleInputChanged} />
                    </label>
                </div>
                <p className="remember">
                    <label>
                        <input type="checkbox" />
                        <span>{text.rememberMe}</span>
                    </label>
                    <button className="btn btn-sm">{text.buttonTxt}</button>
                </p>
                {/*<a href="#" className="form-link">Lost your password?</a>  */}
            </form>
        </div>
    )
}

export default Login