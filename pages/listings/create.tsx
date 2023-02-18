import { Flex } from '@chakra-ui/react';
import FormLayout from '../../layouts/FormLayout';
import { Createbounty } from '../../components/listings/Createbounty';
import { useState } from 'react';
import { CreateJob } from '../../components/listings/jobs/createJob';

const content = <Flex py={4}>jere</Flex>;

const CreateListing = () => {
  // Templates - 1
  // Basic Info - 2
  // Description - 3
  // payment form - 4
  const [steps, setSteps] = useState<number>(1);
  return (
    <>
      <FormLayout
        setStep={setSteps}
        currentStep={steps}
        stepList={[
          {
            label: 'Template',
            number: 1,
          },
          {
            label: 'Listings',
            number: 2,
          },
          {
            label: 'Description',
            number: 3,
          },
          {
            label: 'Payment',
            number: 4,
          },
        ]}
      >
        {/* <Createbounty steps={steps} /> */}
        <CreateJob />
      </FormLayout>
    </>
  );
};

export default CreateListing;
