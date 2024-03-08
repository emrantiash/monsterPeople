import Header from "./header"
export default function AddPeopleLayout({
    children, // will be a page or nested layout
  }) {
    return (
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}
        <Header />
   
        {children}
      </section>
    )
  }
