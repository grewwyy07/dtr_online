import { Box, FileUpload, HStack, Icon } from "@chakra-ui/react";
import { useCallback, type ComponentProps } from "react";
import { LuUpload } from "react-icons/lu";

type AcceptDetails = Parameters<
  NonNullable<ComponentProps<typeof FileUpload.Root>["onFileAccept"]>
>[0];

function App() {
  const onAccept = useCallback((details: AcceptDetails) => {
    const file = details.files[0];
    if (!file) {
      return;
    }
  }, []);

  return (
    <HStack>
      <FileUpload.Root
        maxW="xl"
        alignItems="stretch"
        maxFiles={1}
        onFileAccept={onAccept}
      >
        <FileUpload.HiddenInput />
        <FileUpload.Dropzone>
          <Icon size="md" color="fg.muted">
            <LuUpload />
          </Icon>
          <FileUpload.DropzoneContent>
            <Box>Drag and drop files here</Box>
          </FileUpload.DropzoneContent>
        </FileUpload.Dropzone>
        <FileUpload.List />
      </FileUpload.Root>
    </HStack>
  );
}

export default App;
