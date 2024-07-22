import './button.css';

import IconRifa from '../../image/rifa.png'
import IconCarne from '../../image/talao.png'

export default function Button(props) {
    const { title, onPress, showLogoRifa = false, showLogoCarne = false } = props;

    return (
        <div>
            <button onClick={onPress} className="button">
                <span className="text-title">{title}</span>
                {showLogoRifa && <img src={IconRifa} alt="Gerar Rifa" />}
                {showLogoCarne && <img src={IconCarne} alt="Gerar Carnê" />}
            </button>
        </div>
    )
} 