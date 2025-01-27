import "./style.css";
import { Link } from 'react-router-dom';

const ResetPw = () => {
  return (
    <div className="lupa-kata-sandi">
      <img className="bg-icon" loading="lazy" alt="" src="/img/bg1.png" />
      <div className="email-form">
        <div className="email-input-container">
          <div className="email-input-label">
            <h1 className="lupa-kata-sandi1">Lupa Kata Sandi?</h1>
          </div>
          <div className="masukkan-alamat-email">
            Masukkan alamat email yang terkait dengan akun anda untuk
            mendapatkan kode.
          </div>
          <div className="input-fields">
                <div className="alamat-email1">Masukkan Alamat Email</div>
                <input className="bg4" type="text" />
              </div>
          <div className="buttons">
            <button className="submit-button">
              <div className="submit-button-child" />
              <div className="kirim-kode">Kirim Kode</div>
            </button>
            <div className="login-link">
              <Link to="/login">
              <div className="kembali-untuk-masuk">Kembali untuk masuk</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPw;
