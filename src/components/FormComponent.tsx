import {PrimaryButton} from "../library/Buttons/PrimaryButton.tsx";

export const FormComponent = () => {
    return (
        <form className="flex flex-col text-12px gap-2 bg-white rounded-md border shadow-md p-4 my-auto">
            <div className="flex gap-2 justify-between">
                <label>Email</label>
                <input type="email" name="Email" placeholder="Enter email" />
            </div>
            <div className="flex gap-2 justify-between">
                <label>First name</label>
                <input type="text" name="lastName" />
            </div>
            <div className="flex gap-2 justify-between">
                <label>Last name</label>
                <input type="text" name="lastName" />
            </div>
            <div className="flex gap-2 justify-between">
                <label>Password</label>
                <input type="password" name="Password" />
            </div>
            <div className="flex gap-2 justify-between">
                <label>Confirm Password</label>
                <input type="text" name="Password" />
            </div>
            <div className="py-2 flex w-full justify-end">
                <PrimaryButton size="small"  >Submit</PrimaryButton>
            </div>
        </form>
    );
}
