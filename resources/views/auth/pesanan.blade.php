

@extends('admin1.master')
@section('main')
<div
class="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
<div class="data-table-common data-table-one max-w-full overflow-x-auto">
    <table class="table w-full table-auto" id="dataTableOne">
        <thead>
            <tr>
                <th>
                    <div class="flex items-center gap-1.5">
                        <p>Name/ID</p>
                        <div class="inline-flex flex-col space-y-[2px]">
                            <span class="inline-block">
                                <svg class="fill-current" width="10" height="5"
                                    viewBox="0 0 10 5" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 0L0 5H10L5 0Z" fill="" />
                                </svg>
                            </span>
                            <span class="inline-block">
                                <svg class="fill-current" width="10" height="5"
                                    viewBox="0 0 10 5" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 5L10 0L-4.37114e-07 8.74228e-07L5 5Z"
                                        fill="" />
                                </svg>
                            </span>
                        </div>
                    </div>
                </th>
                <th>
                    <div class="flex items-center gap-1.5">
                        <p>Position</p>
                        <div class="inline-flex flex-col space-y-[2px]">
                            <span class="inline-block">
                                <svg class="fill-current" width="10" height="5"
                                    viewBox="0 0 10 5" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 0L0 5H10L5 0Z" fill="" />
                                </svg>
                            </span>
                            <span class="inline-block">
                                <svg class="fill-current" width="10" height="5"
                                    viewBox="0 0 10 5" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 5L10 0L-4.37114e-07 8.74228e-07L5 5Z"
                                        fill="" />
                                </svg>
                            </span>
                        </div>
                    </div>
                </th>
                <th data-type="date" data-format="YYYY/DD/MM">
                    <div class="flex items-center gap-1.5">
                        <p>BDay</p>
                        <div class="inline-flex flex-col space-y-[2px]">
                            <span class="inline-block">
                                <svg class="fill-current" width="10" height="5"
                                    viewBox="0 0 10 5" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 0L0 5H10L5 0Z" fill="" />
                                </svg>
                            </span>
                            <span class="inline-block">
                                <svg class="fill-current" width="10" height="5"
                                    viewBox="0 0 10 5" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 5L10 0L-4.37114e-07 8.74228e-07L5 5Z"
                                        fill="" />
                                </svg>
                            </span>
                        </div>
                    </div>
                </th>
                <th>
                    <div class="flex items-center gap-1.5">
                        <p>Email/Phone</p>
                        <div class="inline-flex flex-col space-y-[2px]">
                            <span class="inline-block">
                                <svg class="fill-current" width="10" height="5"
                                    viewBox="0 0 10 5" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 0L0 5H10L5 0Z" fill="" />
                                </svg>
                            </span>
                            <span class="inline-block">
                                <svg class="fill-current" width="10" height="5"
                                    viewBox="0 0 10 5" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 5L10 0L-4.37114e-07 8.74228e-07L5 5Z"
                                        fill="" />
                                </svg>
                            </span>
                        </div>
                    </div>
                </th>
                <th>
                    <div class="flex items-center gap-1.5">
                        <p>Address</p>
                        <div class="inline-flex flex-col space-y-[2px]">
                            <span class="inline-block">
                                <svg class="fill-current" width="10" height="5"
                                    viewBox="0 0 10 5" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 0L0 5H10L5 0Z" fill="" />
                                </svg>
                            </span>
                            <span class="inline-block">
                                <svg class="fill-current" width="10" height="5"
                                    viewBox="0 0 10 5" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 5L10 0L-4.37114e-07 8.74228e-07L5 5Z"
                                        fill="" />
                                </svg>
                            </span>
                        </div>
                    </div>
                </th>
                <th>
                    <div class="flex items-center gap-1.5">
                        <p>Status</p>
                        <div class="inline-flex flex-col space-y-[2px]">
                            <span class="inline-block">
                                <svg class="fill-current" width="10" height="5"
                                    viewBox="0 0 10 5" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 0L0 5H10L5 0Z" fill="" />
                                </svg>
                            </span>
                            <span class="inline-block">
                                <svg class="fill-current" width="10" height="5"
                                    viewBox="0 0 10 5" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 5L10 0L-4.37114e-07 8.74228e-07L5 5Z"
                                        fill="" />
                                </svg>
                            </span>
                        </div>
                    </div>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Andrio Maksim</td>
                <td>Designer</td>
                <td>25 Nov, 1989</td>
                <td><a href="cdn-cgi/l/email-protection.html" class="__cf_email__"
                        data-cfemail="ec818d879f8581d8d9ac8b818d8580c28f8381">[email&#160;protected]</a>
                </td>
                <td>Block A, Demo Park</td>
                <td>Full-time</td>
            </tr>
            <tr>
                <td>Brielle Kuphal</td>
                <td>Developer</td>
                <td>25 Nov, 1977</td>
                <td><a href="cdn-cgi/l/email-protection.html" class="__cf_email__"
                        data-cfemail="89cbfbe0ece5e5ecbdbcc9eee4e8e0e5a7eae6e4">[email&#160;protected]</a>
                </td>
                <td>Block A, Demo Park</td>
                <td>Full-time</td>
            </tr>
            <tr>
                <td>Barney Murray</td>
                <td>Designer</td>
                <td>25 Nov, 1966</td>
                <td><a href="cdn-cgi/l/email-protection.html" class="__cf_email__"
                        data-cfemail="8ac8ebf8e4eff3caede7ebe3e6a4e9e5e7">[email&#160;protected]</a>
                </td>
                <td>Block A, Demo Park</td>
                <td>Part-time</td>
            </tr>
            <tr>
                <td>Ressie Ruecker</td>
                <td>Designer</td>
                <td>25 Nov, 1955</td>
                <td><a href="cdn-cgi/l/email-protection.html" class="__cf_email__"
                        data-cfemail="e5b78096968c80a58288848c89cb868a88">[email&#160;protected]</a>
                </td>
                <td>Block A, Demo Park</td>
                <td>Full-time</td>
            </tr>
            <tr>
                <td>Teresa Mertz</td>
                <td>Designer</td>
                <td>25 Nov, 1979</td>
                <td><a href="cdn-cgi/l/email-protection.html" class="__cf_email__"
                        data-cfemail="386c5d4a5d4b59785f55595154165b5755">[email&#160;protected]</a>
                </td>
                <td>Block A, Demo Park</td>
                <td>Part-time</td>
            </tr>
            <tr>
                <td>Chelsey Hackett</td>
                <td>Designer</td>
                <td>25 Nov, 1969</td>
                <td><a href="cdn-cgi/l/email-protection.html" class="__cf_email__"
                        data-cfemail="8fcce7eae3fceaf6cfe8e2eee6e3a1ece0e2">[email&#160;protected]</a>
                </td>
                <td>Block A, Demo Park</td>
                <td>Full-time</td>
            </tr>
            <tr>
                <td>Tatyana Metz</td>
                <td>Designer</td>
                <td>25 Nov, 1989</td>
                <td><a href="cdn-cgi/l/email-protection.html" class="__cf_email__"
                        data-cfemail="c296a3b6bba3aca382a5afa3abaeeca1adaf">[email&#160;protected]</a>
                </td>
                <td>Block A, Demo Park</td>
                <td>Part-time</td>
            </tr>
            <tr>
                <td>Oleta Harvey</td>
                <td>Designer</td>
                <td>25 Nov, 1979</td>
                <td><a href="cdn-cgi/l/email-protection.html" class="__cf_email__"
                        data-cfemail="c788aba2b3a687a0aaa6aeabe9a4a8aa">[email&#160;protected]</a>
                </td>
                <td>Block A, Demo Park</td>
                <td>Full-time</td>
            </tr>
            <tr>
                <td>Bette Haag</td>
                <td>Designer</td>
                <td>25 Nov, 1979</td>
                <td><a href="cdn-cgi/l/email-protection.html" class="__cf_email__"
                        data-cfemail="f7b592838392b7909a969e9bd994989a">[email&#160;protected]</a>
                </td>
                <td>Block A, Demo Park</td>
                <td>Part-time</td>
            </tr>
            <tr>
                <td>Meda Ebert</td>
                <td>Designer</td>
                <td>25 Nov, 1945</td>
                <td><a href="cdn-cgi/l/email-protection.html" class="__cf_email__"
                        data-cfemail="034e66676243646e626a6f2d606c6e">[email&#160;protected]</a>
                </td>
                <td>Block A, Demo Park</td>
                <td>Full-time</td>
            </tr>
            <tr>
                <td>Elissa Stroman</td>
                <td>Designer</td>
                <td>25 Nov, 1945</td>
                <td><a href="cdn-cgi/l/email-protection.html" class="__cf_email__"
                        data-cfemail="682d04011b1b09280f05090104460b0705">[email&#160;protected]</a>
                </td>
                <td>Block A, Demo Park</td>
                <td>Part-time</td>
            </tr>
            <tr>
                <td>Sid Swaniawski</td>
                <td>Designer</td>
                <td>25 Nov, 1945</td>
                <td><a href="cdn-cgi/l/email-protection.html" class="__cf_email__"
                        data-cfemail="4c1f25280c2b212d2520622f2321">[email&#160;protected]</a></td>
                <td>Block A, Demo Park</td>
                <td>Full-time</td>
            </tr>
            <tr>
                <td>Madonna Hahn</td>
                <td>Developer</td>
                <td>25 Nov, 1945</td>
                <td><a href="cdn-cgi/l/email-protection.html" class="__cf_email__"
                        data-cfemail="531e32373c3d3d3213343e323a3f7d303c3e">[email&#160;protected]</a>
                </td>
                <td>Block A, Demo Park</td>
                <td>Part-time</td>
            </tr>
            <tr>
                <td>Waylon Kihn</td>
                <td>Developer</td>
                <td>25 Nov, 1975</td>
                <td><a href="cdn-cgi/l/email-protection.html" class="__cf_email__"
                        data-cfemail="4413253d282b2a042329252d286a272b29">[email&#160;protected]</a>
                </td>
                <td>Block A, Demo Park</td>
                <td>Full-time</td>
            </tr>
            <tr>
                <td>Jaunita Lindgren</td>
                <td>Developer</td>
                <td>25 Nov, 1945</td>
                <td><a href="cdn-cgi/l/email-protection.html" class="__cf_email__"
                        data-cfemail="642e05110a0d1005240309050d084a070b09">[email&#160;protected]</a>
                </td>
                <td>Block A, Demo Park</td>
                <td>Part-time</td>
            </tr>
            <tr>
                <td>Lenora MacGyver</td>
                <td>Developer</td>
                <td>25 Nov, 1998</td>
                <td><a href="cdn-cgi/l/email-protection.html" class="__cf_email__"
                        data-cfemail="703c151e1f021130171d11191c5e131f1d">[email&#160;protected]</a>
                </td>
                <td>Block A, Demo Park</td>
                <td>Full-time</td>
            </tr>
        </tbody>
    </table>
</div>

</div>
</div>


@endsection