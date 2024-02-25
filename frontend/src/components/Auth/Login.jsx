import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { message } from 'antd'; // Ant Design'dan message kullanıyoruz

const Login = () => {
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
                message.success("Giriş başarılı.");

                if (data.user.role === "admin") {
                    navigate("/admin");
                } else {
                    navigate("/");
                }
            } else {
                message.error("Giriş başarısız.");
            }
        } catch (error) {
            message.error("Giriş sırasında bir hata oluştu.");
        }
    }

    return (
        <div className="account-column">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div>
                    <label>
                        <span>Username or email address <span className="required">*</span></span>
                        <input type="text" name="email" onChange={handleInputChanged} />
                    </label>
                </div>
                <div>
                    <label>
                        <span>Password <span className="required">*</span></span>
                        <input type="password" name="password" onChange={handleInputChanged} />
                    </label>
                </div>
                <p className="remember">
                    <label>
                        <input type="checkbox" />
                        <span>Remember me</span>
                    </label>
                    <button className="btn btn-sm">Login</button>
                </p>
                {/*<a href="#" className="form-link">Lost your password?</a>  */}
            </form>
        </div>
    )
}

export default Login