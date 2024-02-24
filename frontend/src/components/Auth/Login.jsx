import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { message } from 'antd'; //message butonu ant kütüphanesinden çekildi

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const navigate = useNavigate();
    const apiUrl = import.meta.env.VITE_API_BASE_URL /* vite ile kullanıldığında böyle */

    //inputtaki verileri toplu almak için
    const handleInputChanged = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value }) //tümünü yerleştir, name bilgisine göre value yi al demekmiş
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        // console.log(formData)
        // console.log("veri kayıt edildi.")

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
                //localStorage.setItem("admin", JSON.stringify(data)); //localStorageye kayıt ediyor.
                message.success("Giriş başarılı.")
                if (data.role === "admin") {
                    // navigate("/admin") //navigatele yükleyince react-router-dom özelliğini almıyor path name gelmiyor o yüzden aşağıdaki gibi yapmak lazım.
                    window.location.href = "/admin"
                  
                } else {
                    // navigate("/") // yönlendirme kodu 
                    window.location.href = "/"
                }
            } else {
                message.error("Giriş başarısız.")
                console.log(response)
            }
        } catch (error) {
            console.log("Giriş hatası", error);
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