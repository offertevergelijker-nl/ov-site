export interface InquiryCreateInput {
    productId: string;
    customer: InquiryCreateCustomerInput;
    location: InquiryCreateLocationInput;
}

export interface InquiryCreateCustomerInput {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
}

export interface InquiryCreateLocationInput {
    streetName: string;
    houseNumber: string;
    city: string;
    postalCode: string;
    provinceId: string | number;
    countryId: string | number;
}

export interface InquiryCreateMetaInput {
    ipAddress: string;
    ref1?: string;
    ref2?: string;
    ref3?: string;
}

export interface InquiryCreateAnswerInput {
    questionId: string | number;
    options?: [InquiryCreateOptionInput]
    textValue?: string;
}

export interface InquiryCreateOptionInput {
    optionId: string | number;
    
}