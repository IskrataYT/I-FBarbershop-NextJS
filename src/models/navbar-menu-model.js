import Button from "@/components/atoms/button"
import { FaArrowLeft, FaArrowRight, FaMoon, FaSun } from "react-icons/fa6"

export const getRenderedKeysByComponent = (key) => {
	switch (key) {
		case "left-arrow":
			return ["account-settings", "theme", "language"]
		case "theme":
			return ["left-arrow", "dark", "light"]
		case "language":
			return ["left-arrow", "dark", "light"]
		default:
			return ["account-settings", "theme", "language"]
	}
}

export const getComponentByKey = (key, updateShowingKeysFunction) => {
	switch (key) {
		case "left-arrow":
			return (
				<Button
					key={key}
					onClick={() => updateShowingKeysFunction()}
					navbar={true}
				>
					<FaArrowLeft />
				</Button>
			)
		case "dark":
			return (
				<Button key={key} navbar={true}>
					Dark <FaMoon />
				</Button>
			)
		case "light":
			return (
				<Button key={key} navbar={true}>
					Light <FaSun />
				</Button>
			)
		case "english":
			return (
				<Button key={key} navbar={true}>
					English
				</Button>
			)
		case "bulgarian":
			return (
				<Button key={key} navbar={true}>
					Bulgarian
				</Button>
			)
		case "theme":
			return (
				<Button
					key={key}
					onClick={() => updateShowingKeysFunction()}
					navbar={true}
				>
					Theme <FaArrowRight />
				</Button>
			)
		case "language":
			return (
				<Button
					key={key}
					onClick={() => updateShowingKeysFunction()}
					navbar={true}
				>
					Language <FaArrowRight />
				</Button>
			)
		case "account-settings":
			return (
				<Button key={key} to="/sign-in">
					Account Settings
				</Button>
			)

		default:
			return null
			break
	}
}