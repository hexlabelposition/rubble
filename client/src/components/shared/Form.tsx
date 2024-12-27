export default function Form() {
  return (
    <form className="flex flex-col gap-4" action="">
      <div className="flex flex-col">
        <label
          className="mb-3 text-sm font-semibold text-primary-500"
          htmlFor=""
        >
          Full Name
        </label>
        <div className="flex h-10 items-center rounded-lg border border-secondary-200">
          <input
            type="text"
            placeholder="Enter full name"
            className="w-full px-[14px] placeholder:text-xs placeholder:font-medium placeholder:text-secondary-500"
          />
        </div>
      </div>

      <div className="flex flex-col">
        <label
          className="mb-3 text-sm font-semibold text-primary-500"
          htmlFor=""
        >
          Email Address
        </label>
        <div className="flex h-10 items-center rounded-lg border border-secondary-200">
          <input
            type="text"
            placeholder="Enter email address"
            className="w-full px-[14px] placeholder:text-xs placeholder:font-medium placeholder:text-secondary-500"
          />
        </div>
      </div>

      <div className="flex flex-col">
        <label
          className="mb-3 text-sm font-semibold text-primary-500"
          htmlFor=""
        >
          Phone Number
        </label>
        <div className="flex h-10 items-center rounded-lg border border-secondary-200">
          <input
            type="text"
            placeholder="Enter phone number"
            className="w-full px-[14px] placeholder:text-xs placeholder:font-medium placeholder:text-secondary-500"
          />
        </div>
      </div>

      <div className="flex flex-col">
        <label
          className="mb-3 text-sm font-semibold text-primary-500"
          htmlFor=""
        >
          Property Type
        </label>
        <div className="flex h-10 items-center rounded-lg border border-secondary-200">
          <input
            type="text"
            placeholder="Select type"
            className="w-full px-[14px] placeholder:text-xs placeholder:font-medium placeholder:text-secondary-500"
          />
        </div>
      </div>

      <div className="flex flex-col">
        <label
          className="mb-3 text-sm font-semibold text-primary-500"
          htmlFor=""
        >
          Budget Range
        </label>
        <div className="flex h-10 items-center rounded-lg border border-secondary-200">
          <input
            type="text"
            placeholder="Select budget range"
            className="w-full px-[14px] placeholder:text-xs placeholder:font-medium placeholder:text-secondary-500"
          />
        </div>
      </div>

      <div className="flex flex-col">
        <label
          className="mb-3 text-sm font-semibold text-primary-500"
          htmlFor=""
        >
          Location Preferences
        </label>
        <div className="flex h-10 items-center rounded-lg border border-secondary-200">
          <input
            type="text"
            placeholder="Select location"
            className="w-full px-[14px] placeholder:text-xs placeholder:font-medium placeholder:text-secondary-500"
          />
        </div>
      </div>

      <div className="flex flex-col">
        <label
          className="mb-3 text-sm font-semibold text-primary-500"
          htmlFor=""
        >
          Message
        </label>
        <div className="flex h-[80px] rounded-lg border border-secondary-200">
          <textarea
            placeholder="Write message"
            className="w-full resize-none px-[14px] py-[10px] text-xs font-medium text-primary-500 placeholder:text-xs placeholder:font-medium placeholder:text-secondary-500"
          />
        </div>
      </div>

      <button
        className="h-10 rounded-[10px] bg-primary-500 text-sm font-semibold text-primary-0"
        type="submit"
      >
        Submit
      </button>
    </form>
  )
}
