import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import { ReactComponent as ValidIcon } from '../../img/valid-icon.svg';
import { ReactComponent as InvalidIcon } from '../../img/invalid-icon.svg';
import { ReactComponent as PreviousIcon } from '../../img/previous-step-arrow.svg';

export const ConsultationForm = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const btnSelected = 'w-[160px] h-[59px] text-white bg-black font-bold text-lg rounded-sm'
    const btnNotSelected = 'w-[160px] h-[59px] bg-mainDownloadGray font-bold text-lg rounded-sm'
    const btnSelectedLg = 'w-[220px] h-[78px] text-white bg-black font-bold text-lg rounded-sm'
    const btnNotSelectedLg = 'w-[220px] h-[78px] bg-mainDownloadGray font-bold text-lg rounded-sm'
    
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        question2: [],
        question2Additional: [],
        question3: '',
    });
    const [selectedButton, setSelectedButton] = useState({
        question2: [],
        question2Additional: [],
        question3: '',
    });
    const [isValid, setIsValid] = useState(false);
    const [validationStatus, setValidationStatus] = useState({
        name: null,
        phone: null,
        email: null,
        question3: null,
    });

    const validateForm = () => {
        if (step === 1) {
            const phoneRegex = /^\+7\(\d{3}\)\d{3}-\d{2}-\d{2}$/;
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const validPhone = phoneRegex.test(formData.phone);
            const validEmail = emailRegex.test(formData.email);
            setValidationStatus({
                name: formData.name ? 'valid' : 'invalid',
                phone: validPhone ? 'valid' : 'invalid',
                email: validEmail ? 'valid' : 'invalid',
                question3: null,
            });
            setIsValid(formData.name && validPhone && validEmail);
        } else if (step === 2) {
            setIsValid(selectedButton.question2.length > 0 && selectedButton.question2Additional.length > 0);
        } else if (step === 3) {
            setValidationStatus({
                name: null,
                phone: null,
                email: null,
                question3: formData.question3.length >= 10 ? 'valid' : 'invalid',
            });
            setIsValid(formData.question3.length >= 10);
        } else if (step === 4) {
            setIsValid(selectedButton.question4 !== '');
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        validateForm();
    };

    const handleButtonClick = (e) => {
        const { name, value } = e.target;
        const currentSelected = selectedButton[name];
        const updatedSelected = currentSelected.includes(value)
            ? currentSelected.filter(item => item !== value)
            : [...currentSelected, value];

        setSelectedButton({ ...selectedButton, [name]: updatedSelected });
        setFormData({ ...formData, [name]: updatedSelected });
        validateForm();
    };

    const handleButtonClickAnother = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setSelectedButton({ ...selectedButton, [name]: value });
        validateForm();
    };

    const handleNextStep = () => {
        setStep(step + 1);
        setSelectedButton({
            question2: [],
            question2Additional: [],
            question3: '',
        });
        setIsValid(false);
    };

    const handlePreviousStep = () => {
        setStep(step - 1);
        setSelectedButton({
            question2: [],
            question2Additional: [],
            question3: '',
        });
        setIsValid(false);
    };

    const handleSubmit = () => {
        // Отправка данных на сервер
        fetch('/submit-brief', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            setIsModalOpen(false); 
            // setIsModalOpen(true); // Открываем модальное окно после успешной отправки
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    };

    return (
        <div className='relative p-12 w-[580px] min-h-[694px] bg-white flex flex-col items-center justify-center rounded shadow-quiz
        m:w-screen m:h-screen
        sm:relative sm:bottom-0 sm:p-5 z-40' 
        onClick={e => e.stopPropagation()}>
                <div>
                    {step > 1 && (
                        <div>
                            <button className='w-[35px] h-[35px] absolute top-10 left-10' onClick={handlePreviousStep}><PreviousIcon /></button>
                        </div>
                    )}
                    {step === 1 && (
                        <div className='flex flex-col items-center'>
                            <h2 className='mb-10 text-3xl sm:text-2xl'>Давайте знакомиться!</h2>
                            <span className='mb-8 text-xl sm:text-base'>Заполните бриф,<br />чтобы мы помогли Вам с задачей</span>
                            <div className='flex flex-col items-center gap-8 mt-8'>
                            <div className={`relative ${validationStatus.name}`}>
                                <input type="text" name="name" placeholder="Имя" onChange={handleInputChange} className='p-4 w-[374px] h-[60px] rounded-sm bg-mainGray text-darkGray border-none sm:w-[300px] sm:h-[48px]'/>
                                {validationStatus.name === 'valid' && <span className="absolute right-3 top-[35%]"><ValidIcon /></span>}
                                {validationStatus.name === 'invalid' && <span className="absolute right-3 top-[35%] "><InvalidIcon /></span>}
                            </div>
                            <div className={`relative ${validationStatus.phone}`}>
                                <InputMask
                                    mask="+7(999)999-99-99"
                                    name="phone"
                                    placeholder="+7(___)___-__-__"
                                    onChange={handleInputChange}
                                    className='p-4 w-[374px] h-[60px] rounded-sm bg-mainGray text-darkGray border-none sm:w-[300px] sm:h-[48px]'
                                />
                                {validationStatus.phone === 'valid' && <span className="absolute right-3 top-[35%] "><ValidIcon /></span>}
                                {validationStatus.phone === 'invalid' && <span className="absolute right-3 top-[35%] "><InvalidIcon /></span>}
                            </div>
                            <div className={`relative ${validationStatus.email}`}>
                                <input type="email" name="email" placeholder="Email" onChange={handleInputChange} className='p-4 w-[374px] h-[60px] rounded-sm bg-mainGray text-darkGray border-none sm:w-[300px] sm:h-[48px]' />
                                {validationStatus.email === 'valid' && <span className="absolute right-3 top-[35%] "><ValidIcon /></span>}
                                {validationStatus.email === 'invalid' && <span className="absolute right-3 top-[35%] "><InvalidIcon /></span>}
                            </div>
                            </div>
                            <button onClick={handleNextStep} disabled={!isValid} className='mt-8 bg-black text-white disabled:bg-progressLight disabled:hover:opacity-100 disabled:cursor-pointer hover:opacity-50 rounded py-5 font-bold text-xl h-[60px] w-[322px] border-2 border-transparent md:text-lg m:w-[274px] m:text-base sm:w-[246px]'>Следующий шаг</button>
                        </div>
                    )}
                    {step === 2 && (
                        <div className='flex flex-col items-center'>
                            <h2 className='mb-10 text-3xl sm:text-2xl'>Какие услуги интересуют?</h2>
                            <span className=' text-xl sm:text-base'>Выберите один или несколько вариантов ответа</span>
                                
                            <p className='mt-5 text-xl sm:text-base'>Атомизаторы</p>
                            <div className='flex flex-row  justify-center items-center gap-4 mt-8'>
                                <button name="question2" value="Option1" onClick={handleButtonClick} className={selectedButton.question2.includes('Option1') ? btnSelected : btnNotSelected}>PREP</button>
                                <button name="question2" value="Option2" onClick={handleButtonClick} className={selectedButton.question2.includes('Option2') ? btnSelected : btnNotSelected}>VIGA</button>
                                <button name="question2" value="Option3" onClick={handleButtonClick} className={selectedButton.question2.includes('Option3') ? btnSelected : btnNotSelected}>EIGA</button>
                            </div>
                            <p className='mt-5 text-xl sm:text-base'>«Под ключ»</p>
                            <div className='flex flex-row justify-center items-center gap-8 mt-8'>
                                <button name="question2Additional" value="OptionA" onClick={handleButtonClick} className={selectedButton.question2Additional.includes('OptionA') ? btnSelectedLg : btnNotSelectedLg}>Производство<br />«под ключ»</button>
                                <button name="question2Additional" value="OptionB" onClick={handleButtonClick} className={selectedButton.question2Additional.includes('OptionB') ? btnSelectedLg : btnNotSelectedLg}>Инжиниринг<br />полного цикла</button>
                            </div>
                            <button onClick={handleNextStep} disabled={!isValid} className='mt-8 bg-black text-white disabled:bg-progressLight disabled:hover:opacity-100 disabled:cursor-pointer hover:opacity-50 rounded py-5 font-bold text-xl h-[60px] w-[322px] border-2 border-transparent md:text-lg m:w-[274px] m:text-base sm:w-[246px]'>Следующий шаг</button>
                        </div>
                    )}
                    {step === 3 && (
                        <div className='flex flex-col items-center'>
                        <h2 className='mb-10 text-3xl max-w-[360px] sm:text-2xl'>Когда с вами связаться?</h2>
                            <div className='flex flex-col  justify-center items-center gap-4 mt-8'>
                                <button name="question7" value="Option1" onClick={handleButtonClickAnother} className={selectedButton.question7 === 'Option1' ? btnSelectedLg : btnNotSelectedLg}>Сейчас</button>
                                <button name="question7" value="Option2" onClick={handleButtonClickAnother} className={selectedButton.question7 === 'Option2' ? btnSelectedLg : btnNotSelectedLg}>В течение дня</button>
                            </div>
                            <button onClick={handleSubmit} disabled={!isValid} className='mt-8 bg-black text-white disabled:bg-progressLight disabled:hover:opacity-100 disabled:cursor-pointer hover:opacity-50 rounded py-5 font-bold text-xl h-[60px] w-[322px] border-2 border-transparent md:text-lg m:w-[274px] m:text-base sm:w-[246px]'>Завершить бриф</button>
                        </div>
                    )}
                </div>
                {/* <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} /> */}
        </div>
    );
};
