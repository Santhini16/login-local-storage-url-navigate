function NextPage() {

  const email = localStorage.getItem("email");

  return (
    <div className="page">

      <div className="home-card">

        <h1>Next Page</h1>

        <h2>Your Email</h2>

        <p>{email}</p>

      </div>

    </div>
  );
}

export default NextPage;