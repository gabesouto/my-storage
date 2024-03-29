import SignInForm from './signIn.form'

function SignIn() {
  return (
    <div className="z-1 flex flex-col gap-4 w-full h-full dark:bg-gray-800 absolute top-0 left-0 right-0 bottom-0 items-center justify-center">
      <SignInForm />
    </div>
  )
}

export default SignIn
