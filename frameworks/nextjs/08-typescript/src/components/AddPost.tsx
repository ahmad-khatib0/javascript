import * as React from 'react'

type Props = {
  savePost: (e: React.FormEvent, formData: IPost) => void
}

const AddPost: React.FC<Props> = ({ savePost }) => {
  const [formData, setFormData] = React.useState<IPost>()
  const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
    setFormData((prevData) => {
      return {
        ...prevData,
        [e.currentTarget?.id]: e.currentTarget.value,
      } as IPost
    })
  }

  return (
    <form className="Form">
      <div>
        <div className="Form--field">
          <label htmlFor="title">Title</label>
          <input id="title" onChange={handleForm} />
        </div>
        <div className="Form--field">
          <label htmlFor="body">Body </label>
          <input id="body" onChange={handleForm} />
        </div>
      </div>
      <button className="Form__button" disabled={formData == undefined ?? false}>
        Add Post
      </button>
    </form>
  )
}

export default AddPost
