import { formValuesTypes } from "@/app/create/page";
import {
  ChangeEvent,
  Dispatch,
  Fragment,
  ReactElement,
  useEffect,
  useState,
} from "react";
import { useDropzone } from "react-dropzone";

interface FileWithPreview extends File {
  preview: string;
}

type ImageFieldProps = {
  label: string;
  inputName: string;
  isRequired: boolean;
  formValues: formValuesTypes;
  handleChange: Dispatch<React.SetStateAction<formValuesTypes>>;
};
export default function ImageField({
  label,
  inputName,
  isRequired,
  formValues,
  handleChange,
}: ImageFieldProps): ReactElement {
  const [file, setFile] = useState<FileWithPreview>({} as FileWithPreview);
  const { getRootProps, getInputProps } = useDropzone({
    maxFiles: 1,
    accept: {
      "image/*": [".jpeg", ".png", ".jpg"],
    },
    onDrop: (acceptedFiles) => {
      const reader = new FileReader();

      reader.onload = () => {
        setFile(
          Object.assign(acceptedFiles[0], {
            preview: URL.createObjectURL(acceptedFiles[0]),
          })
        );

        handleChange({
          ...formValues,
          imageFile: acceptedFiles[0],
        });
      };

      reader.readAsDataURL(acceptedFiles[0]);
    },
  });

  useEffect(() => {
    handleChange({
      ...formValues,
      [inputName]: file.preview,
    });
  }, [file.preview]);

  return (
    <Fragment>
      <label className="label">
        <span className="label-text text-white whitespace-nowrap">
          {isRequired && <span className="text-red-500">* </span>}
          {label}
        </span>
      </label>
      <div
        style={
          file.name
            ? {
                backgroundImage: `url(${file.preview})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }
            : {}
        }
        {...getRootProps({
          className:
            "dropzone w-full mx-auto h-[100px] rounded-3xl flex flex-col justify-center items-center cursor-pointer border-4 border-gray-400 border-dashed",
        })}
      >
        <input id="upload" {...getInputProps()} />
        <p className="flex items-center text-gray-400">
          {!file.name && "Drop some files here or click to select files"}
        </p>
      </div>
      {file.name && (
        <p className="text-center text-white">
          📁 {file.name}
          <button
            className="ml-2"
            onClick={() => {
              setFile({} as FileWithPreview);
            }}
          >
            ✖️
          </button>
        </p>
      )}
    </Fragment>
  );
}
