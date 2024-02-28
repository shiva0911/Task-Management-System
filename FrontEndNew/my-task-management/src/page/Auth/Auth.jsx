import React, { useState } from 'react';
import './Auth.css';
import Signin from './Signin';
import Signup from './Signup';
export default function Auth() 
{
    const [isRegister, setIsRegister] = useState(false);

    const togglePanel = () => {
        setIsRegister(!isRegister);
    };

    return (
        
            <div className='flex justify-center h-screen items-center overflow-hidden'>
                <div className='box lg:max-w-4xl'>
                    <div className={`cover ${isRegister ? "rotate-active" : ""}`}>
                        <div className='front'>
                            <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIALcAwgMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAUBAgMGB//EAEwQAAEDAgEGCQUNBQgDAQAAAAIAAQMEEhEFExQhIjEGMkFRUmGRkrEjVHGBoQcVM0JTVWJjcnPB0eEkNHSi8ENkg5OUwtLxJYKyRP/EABkBAQADAQEAAAAAAAAAAAAAAAABAgMEBf/EACIRAAICAwACAwEBAQAAAAAAAAABAhEDEiEEMRMiQSNRMv/aAAwDAQACEQMRAD8A+4oiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiximKAyixisoAiLGKA1MhBriK0eVctMpvOIu+yrK+TSqyOD+wGVmNuQ3wxwfnZtS3nqRiqSgio4yzduvU2/czalbUrsWGmU3nEXfZNMpvOIu+ygvPMxiPvfHcW7a3+xbhNxh0Jrh3sOH5KNWRsS9LpvOIu+yaZTecRd9lD0yDzcexvyTTYPNx9inRjdEzTKbziLvsmmU3nEXfZQ9Ng83H2JpkHm491lOjG6JmmU3nEXfZNMpvOIe+yh6ZD5uPsXF67+5w95vyTRjdFlplN5xF32TS6bziLvsq3Ti8zh736LIV23GJ0se0TNiJM+GO7kTRjdFsBibXCWI862VfD5CpqIwG0bRPDkZ3xZ/Bl2zpdJVplrJSKLnS6SZ0uklMWSsVlcYpLgL6K1ilIzUAkIiIScSkj6XY7rIsJbnLvP+aqcolV54Rp5hjiEWfi43b8fD2qwG6wS+Na2PpTj9EdXs72D9LvP+ayxjz+KAVw3LR3+sHs/VCTdjFLPtd51ozl8oPd/VZYvrB7P1QGmiQXX5sbrrsevnWk1PG9x2jnNWv0bl1uL5Qe7+qExWFcXswU2QR3jmvEs4Nw4/FRo5xMizg7X0V2RWsqQdAL5T2JoP1n8qnIp3kV1RB0H6z+VNA+sU5c5iIISs41upN5DRMgnTdCS5aNCXxy2ecdfsULhJLJT5NEqeQoyExwcfWuWQcr1Nf5KopyK3fMLbPr/TFbVLXYx2W2pctQ/WfyrnNSZrNlnLrTH4vWpbyxUtNnKiQRjj3nITMzN1u+pVdPwjyJlSs0GlylCU9zOwiW/B9zPufdyOsrkzXWKLKX9/m+6j8TW60lf/yUn3QeJLJGIfGFRH0Xb6bKUEY2qI22uozEKiVkokMyMI9FcM+XRTSC6IqtMnhIRR8+XRRKYKqrq7zjK3ZuZm2ud+VWFPOMt1nGHeqGr+Bu+sHxVpk67PSWj+TLaWOKVowU5PhZwcQvtOsvd9FZjGwLVo4/VisDdGdr6PtTa+j3XWLfq40t+pH+vUhJszdO1JfgiWuH1I/16kNvIls2oQRqCEczHPtXkOu4nf2LNRWQxMQ7RkPGENeHpd3Zm9brkMhaDTxxFaUupn5mbW79ipeHMEh8GJqOiLNlUyBF14O+078+pn7Fbn6R2+ezvSZbyFW1JQU9UMkmvEY5mPdv1CTureOkpJQuDaHkcTd/xXx2HgjU5IqaXKNPVZyeGpjwGMHHZuZnfHHFmwd/UvsGGizDKHwchYSN1vufwb1srS+N9xu0HCcHUzs0EFPtbXed/Ytnng6X8rraY7W+EGPrLBc88PnUfs/NUJIdZQx1oZo4yKK5jbkxdltFDZbFBDaI7tnBh5361LeX+9R+z81pnx4o1UNw793Lu1Y/1ip3ZXVXZ5D3Q8l6XTZNo9IKGCepwnO7jYM7szM+rF3xwbnXjsu8Eo6KEa7JFQNOVKN7tKb8jNg7Pz4t7V6r3Wqsosg0ZRVA50awDEhw1OzO+K8zlyrq8r8DI6wBEbiF5QjHHFmfB/VjrU/1i4NPjZvj+OUZJrp9JyRWe+UNHVD/APqo4pH6t7v4q5Moh45CvJe5zJneD2SSMtoaOz1sZM7exXVTSVZzFo5RjGT79+Ks4rajnt0TDaPalg2reMw8v6oudPGVGFssmcI+iOC6KCb4ERFICIiA76PCX9mPYuggI8UcFssrKy1BFhHdCTBFatc4PP8AyumdHpJnR6SEM5FVQCdhSDdqZ29O5bymNhKkrX/b5vtxv4K7Mvi+nUrNUVUrIMWzoJfRIW9Lszt4OvOcP9JqAybBk8vLjWDI+1uZmd9fq5F6iGAajJ0Yls6mdnHeztudl5StyZVwZVpSljKQc6zvIOtnxfl61fHGMrsrOTik0UXCwspBDS6FH5DPi8zxlrdmdnZvRz+hfRakr6aO3+0IGbrxdv17F53LlNIQUo08MhEU78XHkxwV3kShmgiEqotocXCPkHHnflfw186LHHHjSRMsssuS2WkjlhsEI/a3LndJ0oVvIOLcQS6n/wClzzZebw979Fki5m+TpQ951RZTGSiyrHXAQlnAwIB3O7bn9OvwV7mv7vF2/ootbSlUU5R5mMeVnEteLepUy3p9fZfG0pfb0fOOG9YOX+EMNDxqOgjaQuYjLk9TYLhUVZBTR0wWiI8gjv8ASrPK1KITCQQ+XkKx3Hlw3M6r8o5Mnp/K3DIJYerq62Xf42fDKEVL2cnlYcsZScPRZ8BssxxZSLI8tolJE8kHW7k7k3Vuxb1r3zPaFolb9nkXy/gjkGrquGA5Tljkjo6QfJOWrOuzYaurEnfHl1L6eo8hR34TgvTpqICH2uflXQQIvipGN5qWzLnbN6si5kuimak6P8ylLKrsxRDzBIpiJsxRChrRlu2SEhHG3ldbx1sB/Gt6i1KnEiA7gL+upZMxIyIdnlduZavF0xWU9AzqNOdx2KDFPJBDGXG34spTkJeVHikqa0zRSsIiKwZVVn7zN/h+KtD/AH//AAP9yqq/95m+yHi6tS/fw+4L/wCmSf4Vj+mlLVxxQxxEMwkOp/Im/tZl2GshJ2Hyn+SbeLLoipRf8OmIrLEK1zaZtRRJvcPOsOQ9Ja5tM2lIdOOnQ803+Sf5LD18H13+Qf5LvYtSa1KQd0eXy3NSQ1GcuIb9eBREOtn5MWXmKuq0qYb9mASbV1crv6lfcOX/AGmlH6L+K8wuvxvDgv6fpy+R5c3/AD/D6Xs56lzXFzBYejEMF2Xm+CddpADTHxqYCZvsu4u3Zg7epemhG667i7m/FYzThKmawkpRtG8D7akqoeqphyoNGIkMnIYvqxwxww9Cnwy8YZeMPtbkdZM1TskItWIekK2UEhERAUU0xS8YR/8AVsO1cigKULhuEh3GPJ+bK0nox40EY39ahlDUnsmJfguiM0c7gyLDLJLbAY7Q7mHc/Wyu6eGyEYz2v+8VWSUxUs1PUl8UrCbmZ9WPau8uURlAhpfRfyep+VVm9uItH69ZPeKP+nXKSO1QYqkhDZHyhbz3rnpEl91xeKhQZLmjhlD4ab7sPF1bSfvkP3BeIqnqzvOYuL5IfY7q5k/fKf7o/EFM/wAIh22dURHWbNGdmdLlUhWzz7VFR5yLWzSSSMDFhyjqd3brw1rfP5S+b4/9U3/FQLLO5MVWZ/KXzfH/AKpv+KZ/KXzfH/qm/wCKULLO4VpI6r8/lL5vj/1Lf8V0parSM5GUZQzRk2cAsMWx3Oztqdn5/SiQuzxvumzlS+984CJXEQPd6MWw7V5OHKsZ/Cjb9Ley9n7qsV2QqeXoVLe1nbxwXzKN7wXq+K7xI48sE5H0HgVLfluS0tkoH9jsvdyTDRUJSHtZsdfW6+Z+5m//AJub+Gd/ay+lt/Tcj+lcvlr+hrhVRog0DjlKv07N2xRjhHc2snfe/q3KxkISPZ+LqdamRcUSzY/RHX244KtyhXjS2jTiJWk2cbmZ9fa650rZryKssVkTIFwpqmOouzRXZssC9OGP9ehdlNEp2ddIRckUUWMVeUoKcrNZFzDgucOVqYoiOUszbvufw51U1VeVRshHGN29xbX2qE0e2MpldaTYczO3UtVhTj05nmaZb5VyjHLRlGIzDnMAvOImbB31rSkIbIbrSG1m2d2GHI3tWs1aM+ZuG0o5Rd23tzOuEPkjkL+wGc4ybo4vizt2skVqqDk5MmXWzFYVu0t8dIPi7Xj+SkaNH9pdRER4gqG6LqJT1YZo5h+q/F1cyP8AtNP90f8AtVXlL4aT7j8XVnJ+9Uf3Z+DKk3aRMVTZ3WkoZ2GQbrbhdsebFsMVusE9oXdHWqFzz85QS5Np6OtqiydPBaz/ABWLBsNl9zs/Oy6ZzJ+nzVPvyPlIs3ZnWwHU2tuxWZEIwjLPJIN+GDA+DNjubUtnKHPFFnJrhHF9t9yFSjzVBodPB7+7UJ3ud+sup9a7E+Tyqayf35H9ojsYM7qDVhiyss9TZmOXOTWyFg22+9b3w3yDnJroxxfbdTZNFKwUAw0MXv4P7MTu73tjJi+ODtjirOkLSq+SsESGDNNFG5M7Oet3d2Z9eGtmZ/SuudgsjLPTeULAdt11C4JXiIrtnEXffvw19fWoYo8/7o0V/BWqL5MgPsdmfxXymjpZJaOonDi09l3rfDFfYuGUWd4K5UH6h3b1Oz/gvnfAMI6o8qZMl4tTTO4+kXxZ+113ePOsTMprpK9zV7MvSD0qYsO1l9EyjJmqOQgkzZarTLdjjq5F8iyFXlkXLcNSd3kTslb6Lvg/9dS+sZU8rQXRFIQkQu2bwfFnx5H5FHkL7piD+rRFpa6cwuIrpYxdnDVgfM+Lfgq6vjKK4bs5tO1+u5m34PyPya1YBd5Pyclv2Ww/RbSjsF9n/t2UJJGTtnHJVQVOBD8W3HAdTM+vF+t9yt6OYqiESMREi3t4Lz7NZs+3mbkbxWkslgF5QhIo3bZ3vi7fgolj29ExyanqkXliyzOxOwieGOreiz+JmvzEqlhGUyEtm0Hf1subPsfR5Vbjk+MM5YRbQ4cmrn5EDJ0AdIvtK/yFfiIA5PnP7Nup/BYpSGWgyh37ebU34srOrqJae3NQxlz3SsPZiqmIamIKoQhhtnL5Ztnf+ars2NVEvIX8jH9lvBbqHQ1Ekp5ooYxER3jKxPqwbcymLJmy6VeU28tJ9w/irN/hqP7BeDKuyl8N/gF4qcRbdCRdF/8A5xSXpFY+2Skda3j0h7zJePSHvMqGhzYJAC22OQfi3b29mtbYy/Jw95/yW7OJ8Qrvas4IVOXldnyMOzu2n1exZxl+Th69p/yW7vZx/wAFi8ekPeZB018rs+Rh2d20+r2IAFeREVxF2M3My2vHpD3mS8ekPaykkjZXiz+SqyL5SCRu0XXyj3Nmv4QiX91kx7GX193jJrbh2tW9uVfKPc1izXCGoEtnNwSB2Phy+hdOJ/zmZy/6Q4d5N0LKsdSI+Sq4hk6r2ZmJvB/W69xwLqCqODdGRbRCLxv6ndmUThvQFX8Gacom8rDhI3LjgD4s3qUT3Mqi/JVRBd8DPj6nZnb8exHLfCn/AIQo1I9E+ThC4oiIrix2id3x6lpUQEAbRbJY+nVyqyIrAIvijrf/AKVRNlzJssJDni2t3ki9XIs02+EtRRz0GQguiISuHFv17HVdDSzme1CXG3Wvhi+70N1q3yflGkio4xOQrrWd9gvy9CsqeYagM7EWzz2u270q/wAkoqmU0iykHJdTa2N+OHyqK+RU3Zb4kd5o/jLiprqNNFKfFzftWKkbsouERkIQ2EQ7+KqTPyfKF3l6mvyfNWw2Hb1PzKq94Kv6K68eSCj05MmN3wcH5CKskvIiHNO+16WXoFWUOTZqO7ZIiLU5KTm6noyLLI4uXDbHskca9v2mP6URM/Pvbd2raOrMYY4p6UZs3qYsWwfDVufc+CxLSyS252OQrd2/V6MFy0AujUd8lH1a6Q9k+HfTIfm0e0VnTIPm8e0Vw0L+I75LGhfxHfJKgTcyVHlAYvgqK37Jit/fU/NC/wAxlC0L+I75Jof8R3yTWAuZLPKNwWnR3DzEYrnpkPzcHaCjvR/xHfJND++75JrAXMk6XD83j2gmlw/N49oqNoX33fdZ0L+I75KNYC5kjTI+N73iPrFedyDkqiyblWqrIY5Jjmu8mTtgLO7vytiumVuCdNlc/wBtmyiUXJHnXYW9WGv1rORuCNDkU5Coo6q6QWYs4ZPqbqU1H/SybrqLsJyrZxHR7YIccbnZ8SdsGZmbVgzO7u/qVfk8qLJFYVHbDT6RLZE2objwfBm5/UrIY5gAQEJBHcwizsyp5+CtDUZbjyxLTzaZGTOz3Pa7tud252Wbhb4yYzpej0ioq8LKyT6WtlZ5up6Mir62hypLNdFDGQ85E7P61rjaT6ZZE3+HSLiD9lWkY7AiqyKkyoNt0MI873qzjCtHopkkn6Yxpo6ZkuZFt+1/VrCxs2JaIiqWCIiAIiIAiIgCIiAIiIAiIgCIiALGCyiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgP/2Q==" alt="front" />
                            <div className='text'>
                                <span className='text-1'>
                                    Success is
                                </span>
                                <span className='text-2 text-xs'>Let's get connected</span>
                            </div>
                        </div>
                        <div className="back">
                            <img src="https://media.istockphoto.com/id/1281150061/vector/register-account-submit-access-login-password-username-internet-online-website-concept.jpg?s=612x612&w=0&k=20&c=9HWSuA9IaU4o-CK6fALBS5eaO1ubnsM08EOYwgbwGBo=" alt="back" />

                        </div>
                    </div>
                    <div className="forms h-full">
                        <div className="form-content h-full">
                            <div className="login-form">
                            <Signin togglePanel={togglePanel}/>
                            </div>
                            <div className='signup-form'>
                                <Signup togglePanel={togglePanel}/>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        
    );
};
