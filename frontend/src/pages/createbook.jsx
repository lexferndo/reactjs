/* eslint-disable react/prop-types */
import InputForm from "../components/elements/Input/index";
import Button from "../components/elements/Button/Button";
import { createBook } from "../modules/fetch";

const CreateBook = () => {
  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const data = {
        title: event.target.title.value,
        author: event.target.author.value,
        publisher: event.target.publisher.value,
        year: event.target.year.value,
        pages: event.target.pages.value,
        image: event.target.image.files[0],
      };

      await createBook(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex justify-center max-w-md rounded shadow-lg">
        <div className="w-full max-w-xs">
          <h1 className="text-3xl font-bold mb-5 text-green-600">
            Create New Book
          </h1>

          <form onSubmit={handleSubmit}>
            <InputForm
              label="Title"
              type="text"
              placeholder="Judul Buku"
              name="title"
            />

            <InputForm
              label="Author"
              type="text"
              placeholder="Nama Pengarang"
              name="author"
            />

            <InputForm
              label="Publisher"
              type="text"
              placeholder="Nama Penerbit"
              name="publisher"
            />

            <InputForm
              label="Year"
              type="text"
              placeholder="Tahun Terbit"
              name="year"
            />

            <InputForm
              label="Pages"
              type="text"
              placeholder="Jumlah Halaman"
              name="pages"
            />

            <InputForm label="Image" type="file" placeholder="" name="image" />

            <Button style="w-full bg-green-500 mb-3">Submit</Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateBook;
