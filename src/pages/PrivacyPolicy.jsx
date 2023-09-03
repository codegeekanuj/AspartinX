import React from 'react'

const PrivacyPolicy = () => {
  return (
    <div className='pt-24 pb-12 flex flex-col justify-center items-center px-12 dark:text-slate-400'>

        <h1 className='text-center font-semibold text-xl dark:text-white'>Privacy Policy</h1>

        <div className='md:w-[80%] my-12 space-y-3' >
            <p><span className='font-semibold dark:text-white'>At AspartinX,</span><br/> We are committed to protecting your privacy and ensuring the security of your personal information. <br/>This Privacy Policy outlines how we collect, use, and safeguard the limited information we collect solely for the purpose of providing you with the best possible service.</p>
            <h2 className='font-bold py-2 dark:text-white'>Information We Collect</h2>
            <p>We collect and use the following limited personal information:</p>
            <li>
            <span className='font-medium dark:text-white'>Contact Details:</span>  This may include your name, email address, phone number, and other contact information that you voluntarily provide to us when you communicate with us.
            </li>
            <h2 className='font-bold py-2 dark:text-white'>How We Use Your Information</h2>
            <p>We use the information you provide only for the purpose of delivering our services to you. This includes:</p>
            <li>Communicating with you to understand your needs and preferences.</li>
            <li>Providing the services you request.</li>
            <li>Ensuring the best possible user experience.</li>
            <h2 className='font-bold py-2 dark:text-white'>Disclosure of Your Information</h2>
            <p>We do not share, sell, rent, or disclose your personal information to any third parties. Your information remains strictly confidential and is used solely for the purpose of providing our services to you.</p>
            <h2 className='font-bold py-2 dark:text-white'>Your Choices</h2>
            <p>You have the option not to provide your personal information. However, this may affect our ability to provide you with certain services.</p>
            <h2 className='font-bold py-2 dark:text-white'>Changes to This Privacy Policy</h2>
            <p>We may update this Privacy Policy to reflect changes in our practices or to comply with legal or regulatory requirements. Any updates will be posted on this page.</p>
            <h2 className='font-bold py-2 dark:text-white'>Contact Us</h2>
            <p>If you have any questions or concerns about our Privacy Policy or the handling of your personal information, please contact us at <a href="mailto :business.aspartinx@gmail.com" className='text-blue-600'>business.aspartinx@gmail.com</a>.</p>
        </div>
    </div>
  )
}

export default PrivacyPolicy