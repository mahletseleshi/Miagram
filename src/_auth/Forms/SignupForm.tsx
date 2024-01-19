import { Button } from "@/components/ui/button"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {z} from "zod"
import {
  Form,
  FormControl,

  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Signupvalidation } from "@/lib/Validation"


const SignupForm = () => {
  const isloading = true;

  const form = useForm<z.infer<typeof Signupvalidation>>({
    resolver: zodResolver(Signupvalidation),
    defaultValues: {
      name: "",
      username: "",
      email: "",
      password: "",
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof Signupvalidation>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }


  return (
    <Form {...form}>
      <div className="sm:w-420 flex flex-center flex-col">
        <img src="/assets/images/logo.svg"></img>
        <h2 className="h3-bold md:h2-bold pt-2 sm:pt-6">Create your account</h2>
        <p className="text-light-3 mt-2 small-medium mb-10 md:base-regular">To use Miagram Enter your details</p>

    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-1">
    {/* <FormField
        control={form.control}
        name="username"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Username</FormLabel>
            <FormControl>
              <Input type="text"className="shad-input"{...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      /> */}

<FormField
        control={form.control}
        name="name"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Name</FormLabel>
            <FormControl>
              <Input type="text"className="shad-input"{...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

<FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input type="email"className="shad-input"{...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />


<FormField
        control={form.control}
        name="password"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Password</FormLabel>
            <FormControl>
              <Input type="password"className="shad-input"{...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />


      
      <Button type="submit" className="shad-button_primary w-full flex items-center justify-center mt-[100px]">
      {isloading ? (
        <div className="flex-center gap-2">
          Loading ...
        </div>
      ) : "Sign Up"}
      </Button>
    </form>
    </div>
  </Form>
  )
}

export default SignupForm

