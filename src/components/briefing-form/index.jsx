import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import { ReactComponent as ValidIcon } from '../../img/valid-icon.svg';
import { ReactComponent as InvalidIcon } from '../../img/invalid-icon.svg';
import { ReactComponent as PreviousIcon } from '../../img/previous-step-arrow.svg';
import { ReactComponent as SuccesIcon } from '../../img/succes-message-icon.svg';
import { NavLink } from 'react-router-dom';

export const BriefingForm = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

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
        question4: '',
        question5: '',
        question6: '',
        question7: '',
    });
    const [selectedButton, setSelectedButton] = useState({
        question2: [],
        question2Additional: [],
        question4: '',
        question5: '',
        question6: '',
        question7: '',
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
        } else if (step === 5) {
            setIsValid(selectedButton.question5 !== '');
        } else if (step === 6) {
            setIsValid(selectedButton.question6 !== '');
        } else if (step === 7) {
            setIsValid(selectedButton.question7 !== '');
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
            question4: '',
            question5: '',
            question6: '',
            question7: '',
        });
        setIsValid(false);
    };

    const handlePreviousStep = () => {
        setStep(step - 1);
        setSelectedButton({
            question2: [],
            question2Additional: [],
            question4: '',
            question5: '',
            question6: '',
            question7: '',
        });
        setIsValid(false);
    };

    const handleSubmit = () => {
        const transformedData = {
            имя: formData.name,  // Имя'
            'номер телефона': formData.phone,  // номер телефона
            email: formData.email,  // email
            'Какие услуги интересуют?': formData.question2,  // Какие услуги интересуют
            'под ключ?:': formData.question2Additional,   // доп вопрос услуг
            'Какую продукцию планируете выпускать?': formData.question3, // Какую продукцию планируете выпускать?
            'Сколько продукции планируете выпускать в смену?': formData.question4,  // Вес продукции 
            'Ваше финансирование подтверждено или нужно подтверждать?': formData.question5,  // финансирование
            'Ваша компания частная или государственная?': formData.question6,  // частная или государственная
            'Когда с вами связаться?': formData.question7  // Последний вопрос
        };
        // Отправка данных на сервер
        fetch('https://api.centrat.ru/submit-brief', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(transformedData),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();  // Обработка JSON-ответа
        })
        .then(data => {
            console.log('Success:', data);
            setSuccessMessage('Заявка отправлена');  // Успешное сообщение
            setIsModalOpen(true);  // Открываем модальное окно
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
            {/* Сообщение об успешной отправке */}
            {successMessage ? (
                <div className='h-[500px] flex justify-between items-center flex-col gap-5'>
                    <div className='flex items-center gap-5 flex-col'>
                        <SuccesIcon className='w-[50px] h-[50px]' />
                        <h2 className='mb-10 text-3xl sm:text-2xl'>{successMessage}</h2>
                    </div>
                        <div className='flex flex-col items-center'>
                            <span className='mb-5 text-xl sm:text-base'>Узнайте о других продуктах</span>
                            <div className='flex gap-2'>
                                <NavLink to='/prep'><button className='mt-4 w-[160px] h-[60px] bg-mainGray text-black hover:bg-black hover:text-white  rounded py-3 px-6 font-bold text-xl'>PREP</button></NavLink>
                                <NavLink to='/viga'><button className='mt-4 w-[160px] h-[60px] bg-mainGray text-black hover:bg-black hover:text-white  rounded py-3 px-6 font-bold text-xl'>VIGA</button></NavLink>
                                <NavLink to='/eiga'><button className='mt-4 w-[160px] h-[60px] bg-mainGray text-black hover:bg-black hover:text-white  rounded py-3 px-6 font-bold text-xl'>EIGA</button></NavLink>
                            </div>
                            <div className='flex gap-2'>
                                <NavLink to='/Production'><button className='mt-4 w-[220px] h-[78px] bg-mainGray text-black hover:bg-black hover:text-white rounded py-3 px-6 font-bold text-xl'>Производство <br />«под ключ»</button></NavLink>
                                <NavLink to='/Engineering'><button className='mt-4 w-[220px] h-[78px] bg-mainGray text-black hover:bg-black hover:text-white rounded py-3 px-6 font-bold text-xl'>Инженерия <br />«под ключ»</button></NavLink>
                            </div>
                        </div>
                    </div>
            ) : (
                <div>
                    {step > 1 && (
                        <div>
                            <button className='w-[35px] h-[35px] absolute top-10 left-10' onClick={handlePreviousStep}><PreviousIcon /></button>
                        </div>
                    )}
                    {step === 1 && (
                        <div className='flex flex-col items-center'>
                            <h2 className='mb-10 text-3xl sm:text-2xl'>Давайте знакомиться!</h2>
                            <div className='mb-10 flex gap-3'>
                                <div className={`w-[60px] h-1 rounded-full bg-progressDark  sm:w-[40px]`}></div>
                                <div className={`w-[60px] h-1 rounded-full bg-progressLight sm:w-[40px]`}></div>
                                <div className={`w-[60px] h-1 rounded-full bg-progressLight sm:w-[40px]`}></div>
                                <div className={`w-[60px] h-1 rounded-full bg-progressLight sm:w-[40px]`}></div>
                                <div className={`w-[60px] h-1 rounded-full bg-progressLight sm:w-[40px]`}></div>
                                <div className={`w-[60px] h-1 rounded-full bg-progressLight sm:w-[40px]`}></div>
                            </div>
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
                                <button name="question2" value="PREP" onClick={handleButtonClick} className={selectedButton.question2.includes('PREP') ? btnSelected : btnNotSelected}>PREP</button>
                                <button name="question2" value="VIGA" onClick={handleButtonClick} className={selectedButton.question2.includes('VIGA') ? btnSelected : btnNotSelected}>VIGA</button>
                                <button name="question2" value="EIGA" onClick={handleButtonClick} className={selectedButton.question2.includes('EIGA') ? btnSelected : btnNotSelected}>EIGA</button>
                            </div>
                            <p className='mt-5 text-xl sm:text-base'>«Под ключ»</p>
                            <div className='flex flex-row justify-center items-center gap-8 mt-8'>
                                <button name="question2Additional" value="Производство «под ключ»" onClick={handleButtonClick} className={selectedButton.question2Additional.includes('Производство «под ключ»') ? btnSelectedLg : btnNotSelectedLg}>Производство<br />«под ключ»</button>
                                <button name="question2Additional" value="Инжиниринг полного цикла" onClick={handleButtonClick} className={selectedButton.question2Additional.includes('Инжиниринг полного цикла') ? btnSelectedLg : btnNotSelectedLg}>Инжиниринг<br />полного цикла</button>
                            </div>
                            <button onClick={handleNextStep} disabled={!isValid} className='mt-8 bg-black text-white disabled:bg-progressLight disabled:hover:opacity-100 disabled:cursor-pointer hover:opacity-50 rounded py-5 font-bold text-xl h-[60px] w-[322px] border-2 border-transparent md:text-lg m:w-[274px] m:text-base sm:w-[246px]'>Следующий шаг</button>
                        </div>
                    )}
                    {step === 3 && (
                        <div className='flex flex-col items-center'>
                            <h2 className='mb-10 text-3xl max-w-[360px] sm:text-2xl'>Какую продукцию планируете выпускать?</h2>
                            <div className='mb-10 flex justify-center gap-3'>
                                <div className={`w-[60px] h-1 rounded-full bg-progressDark sm:w-[40px]`}></div>
                                <div className={`w-[60px] h-1 rounded-full bg-progressDark sm:w-[40px]`}></div>
                                <div className={`w-[60px] h-1 rounded-full bg-progressDark sm:w-[40px]`}></div>
                                <div className={`w-[60px] h-1 rounded-full bg-progressLight sm:w-[40px]`}></div>
                                <div className={`w-[60px] h-1 rounded-full bg-progressLight sm:w-[40px]`}></div>
                                <div className={`w-[60px] h-1 rounded-full bg-progressLight sm:w-[40px]`}></div>
                            </div>
                            <p className='mt-5 mb-10 text-xl  sm:text-base'>Заполните поле</p>
                            <div className={`relative ${validationStatus.question3}`}>
                                <textarea name="question3" onChange={handleInputChange} className='w-[374px] h-[60px] border-mainBlue border-solid border-2 rounded'></textarea>
                                {validationStatus.question3 === 'valid' && <span className="absolute right-10 top-[35%] "><ValidIcon /></span>}
                                {validationStatus.question3 === 'invalid' && <span className="absolute right-10 top-[35%] "><InvalidIcon /></span>}
                            </div>
                            <button onClick={handleNextStep} disabled={!isValid} className='mt-8 bg-black text-white disabled:bg-progressLight disabled:hover:opacity-100 disabled:cursor-pointer hover:opacity-50 rounded py-5 font-bold text-xl h-[60px] w-[322px] border-2 border-transparent md:text-lg m:w-[274px] m:text-base sm:w-[246px]'>Следующий шаг</button>
                        </div>
                    )}
                    {step === 4 && (
                        <div className='flex flex-col items-center'>
                        <h2 className='mb-10 text-3xl max-w-[360px] sm:text-2xl'>Сколько продукции планируете выпускать в смену?</h2>
                        <div className='mb-10 flex justify-center gap-3'>
                            <div className={`w-[60px] h-1 rounded-full bg-progressDark sm:w-[40px]`}></div>
                            <div className={`w-[60px] h-1 rounded-full bg-progressDark sm:w-[40px]`}></div>
                            <div className={`w-[60px] h-1 rounded-full bg-progressDark sm:w-[40px]`}></div>
                            <div className={`w-[60px] h-1 rounded-full bg-progressDark sm:w-[40px]`}></div>
                            <div className={`w-[60px] h-1 rounded-full bg-progressLight sm:w-[40px]`}></div>
                            <div className={`w-[60px] h-1 rounded-full bg-progressLight sm:w-[40px]`}></div>
                        </div>
                            <p className='Выберите вариант ответа'>Выберите вариант ответа</p>
                            <div className='flex flex-col  justify-center items-center gap-4 mt-8'>
                                <button name="question4" value="10кг" onClick={handleButtonClickAnother} className={selectedButton.question4 === '10кг' ? btnSelectedLg : btnNotSelectedLg}>10 кг</button>
                                <button name="question4" value="50 кг" onClick={handleButtonClickAnother} className={selectedButton.question4 === '50 кг' ? btnSelectedLg : btnNotSelectedLg}>50 кг</button>
                                <button name="question4" value="100 кг" onClick={handleButtonClickAnother} className={selectedButton.question4 === '100 кг' ? btnSelectedLg : btnNotSelectedLg}>100 кг</button>
                            </div>
                            <button onClick={handleNextStep} disabled={!isValid} className='mt-8 bg-black text-white disabled:bg-progressLight disabled:hover:opacity-100 disabled:cursor-pointer hover:opacity-50 rounded py-5 font-bold text-xl h-[60px] w-[322px] border-2 border-transparent md:text-lg m:w-[274px] m:text-base sm:w-[246px]'>Следующий шаг</button>
                        </div>
                    )}
                    {step === 5 && (
                        <div className='flex flex-col items-center'>
                        <h2 className='mb-10 text-3xl max-w-[360px] sm:text-2xl'>Ваше финансирование подтверждено или нужно подтверждать?</h2>
                        <div className='mb-10 flex justify-center gap-3'>
                            <div className={`w-[60px] h-1 rounded-full bg-progressDark sm:w-[40px]`}></div>
                            <div className={`w-[60px] h-1 rounded-full bg-progressDark sm:w-[40px]`}></div>
                            <div className={`w-[60px] h-1 rounded-full bg-progressDark sm:w-[40px]`}></div>
                            <div className={`w-[60px] h-1 rounded-full bg-progressDark sm:w-[40px]`}></div>
                            <div className={`w-[60px] h-1 rounded-full bg-progressDark sm:w-[40px]`}></div>
                            <div className={`w-[60px] h-1 rounded-full bg-progressLight sm:w-[40px]`}></div>
                        </div>
                            <p className='Выберите вариант ответа'>Выберите вариант ответа</p>

                            <div className='flex flex-col  justify-center items-center gap-4 mt-8'>
                                <button name="question5" value="Да" onClick={handleButtonClickAnother} className={selectedButton.question5 === 'Да' ? btnSelectedLg : btnNotSelectedLg}>Да</button>
                                <button name="question5" value="Нет" onClick={handleButtonClickAnother} className={selectedButton.question5 === 'Нет' ? btnSelectedLg : btnNotSelectedLg}>Нет</button>
                            </div>
                            <button onClick={handleNextStep} disabled={!isValid} className='mt-8 bg-black text-white disabled:bg-progressLight disabled:hover:opacity-100 disabled:cursor-pointer hover:opacity-50 rounded py-5 font-bold text-xl h-[60px] w-[322px] border-2 border-transparent md:text-lg m:w-[274px] m:text-base sm:w-[246px]'>Следующий шаг</button>
                        </div>
                    )}
                    {step === 6 && (
                        <div className='flex flex-col items-center'>
                        <h2 className='mb-10 text-3xl max-w-[360px] sm:text-2xl'>Ваша компания частная или государственная?</h2>
                        <div className='mb-10 flex justify-center gap-3'>
                            <div className={`w-[60px] h-1 rounded-full bg-progressDark sm:w-[40px]`}></div>
                            <div className={`w-[60px] h-1 rounded-full bg-progressDark sm:w-[40px]`}></div>
                            <div className={`w-[60px] h-1 rounded-full bg-progressDark sm:w-[40px]`}></div>
                            <div className={`w-[60px] h-1 rounded-full bg-progressDark sm:w-[40px]`}></div>
                            <div className={`w-[60px] h-1 rounded-full bg-progressDark sm:w-[40px]`}></div>
                            <div className={`w-[60px] h-1 rounded-full bg-progressLight sm:w-[40px]`}></div>
                        </div>
                            <p className='Выберите вариант ответа'>Выберите вариант ответа</p>

                            <div className='flex flex-col  justify-center items-center gap-4 mt-8'>
                                <button name="question6" value="Частная" onClick={handleButtonClickAnother} className={selectedButton.question6 === 'Частная' ? btnSelectedLg : btnNotSelectedLg}>Частная</button>
                                <button name="question6" value="Государственная" onClick={handleButtonClickAnother} className={selectedButton.question6 === 'Государственная' ? btnSelectedLg : btnNotSelectedLg}>Государственная</button>
                            </div>
                            <button onClick={handleNextStep} disabled={!isValid} className='mt-8 bg-black text-white disabled:bg-progressLight disabled:hover:opacity-100 disabled:cursor-pointer hover:opacity-50 rounded py-5 font-bold text-xl h-[60px] w-[322px] border-2 border-transparent md:text-lg m:w-[274px] m:text-base sm:w-[246px]'>Следующий шаг</button>
                       
                        </div>
                    )}
                    {step === 7 && (
                        <div className='flex flex-col items-center'>
                        <h2 className='mb-10 text-3xl max-w-[360px] sm:text-2xl'>Когда с вами связаться?</h2>
                            <div className='flex flex-col  justify-center items-center gap-4 mt-8'>
                                <button name="question7" value="Сейчас" onClick={handleButtonClickAnother} className={selectedButton.question7 === 'Сейчас' ? btnSelectedLg : btnNotSelectedLg}>Сейчас</button>
                                <button name="question7" value="В течении дня" onClick={handleButtonClickAnother} className={selectedButton.question7 === 'В течении дня' ? btnSelectedLg : btnNotSelectedLg}>В течение дня</button>
                            </div>
                            <button onClick={handleSubmit} disabled={!isValid} className='mt-8 bg-black text-white disabled:bg-progressLight disabled:hover:opacity-100 disabled:cursor-pointer hover:opacity-50 rounded py-5 font-bold text-xl h-[60px] w-[322px] border-2 border-transparent md:text-lg m:w-[274px] m:text-base sm:w-[246px]'>Завершить бриф</button>
                        </div>
                    )}
                </div>
             )}
        </div>
    );
};
