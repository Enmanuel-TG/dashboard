

interface Props {
    params: {
        id: string;
    };
}

export const Page = async ({ params }: Props) => {
    const { id } = params;
  return (
      <div>Pokemon
            {id}
    </div>
  )
}

export default Page;