import { SecondaryButton } from "../library/Buttons/SecondaryButton.tsx";
import { TextComponent } from "../library/Texts/TextComponent.tsx";
import {PrimaryButton} from "../library/Buttons/PrimaryButton.tsx";

export const HomePage = () => {
    return (
        <div className="text-themeColor flex flex-col gap-2 h-screen items-center bg-gray-100">
            <div className="p-2 flex 1-full text-12px flex-col gap-2 justify-center items-center my-auto ">
                <PrimaryButton size="small">
                    <TextComponent size="small" title="Primary Button" weight={500} />
                </PrimaryButton>
                <SecondaryButton size="small" >
                    <TextComponent size="small" title="Secondary" weight={500} />
                </SecondaryButton>
                <div className="w-2/3">
                    <TextComponent
                        size="small"
                        weight={500}
                        title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                        color="#000"
                    />
                </div>
            </div>
        </div>
    )
}
