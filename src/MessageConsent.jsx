import { useCookies } from "react-cookie";

const MESSAGE_CONSENT_KEY = "ApPConsent";

// eslint-disable-next-line react/prop-types
export const MessageConsent = ({ daysExpire = 7 }) => {
	const [cookies, setCookie] = useCookies([MESSAGE_CONSENT_KEY]);

	const Accept = () => {
		const expires = new Date();
		expires.setDate(expires.getDate() + daysExpire);

		setCookie(MESSAGE_CONSENT_KEY, true, { expires }); //Expira en 7 dias
	};

	if (cookies[MESSAGE_CONSENT_KEY]) return "";

	return (
		<div className="fixed z-10 bottom-0 left-0 w-full bg-white p-3 text-center">
			<div className="max-w-[1600px] mx-auto text-xs">
				<p className="mb-2">Al utilizar nuestro sitio web, aceptas el uso de Cookies conforme a esta política. Nos reservamos el derecho de actualizar y modificar esta política en cualquier momento. Cualquier cambio será publicado en esta página y, si es necesario, se te notificará mediante el sitio web o por otros medios.</p>
				<p className="mb-2">
					Para obtener más información sobre nuestra política de privacidad y el uso de tus datos personales, consulta nuestra{" "}
					<a className="underline" href="#" target="_blank" rel="noopener noreferrer">
						Política de Privacidad.
					</a>
				</p>

				<button className="py-1 px-2 bg-yellow-700 text-white" type="button">
					Rechazar (Opcional)
				</button>
				<button className="py-1 px-2 bg-blue-600 text-white ml-2" type="button" onClick={() => Accept()}>
					Estoy de acuerdo
				</button>
			</div>
		</div>
	);
};
