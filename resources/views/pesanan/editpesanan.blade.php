<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <form action="{{route('pesanan.update', $pesanan->id)}}" method="post" enctype="multipart/form-data">
        @csrf
        @method('PUT')
        <input type="text" value="{{$pesanan->nama_mempelai_laki}}" name="nama_mempelai_laki" id="nama_mempelai_laki" placeholder="Nama Mempelai Laki-laki"><br>
        <input type="text" value="{{$pesanan->nama_mempelai_perempuan}}" name="nama_mempelai_perempuan" id="nama_mempelai_perempuan" placeholder="Nama Mempelai Perempuan"><br>
        @if ($pesanan->status == '0')
        <input type="date" value="{{$pesanan->tanggal_terbit}}" name="tanggal_terbit" id="tanggal_terbit" ><br>
        @else
        <input type="date" value="{{$pesanan->tanggal_terbit}}" name="tanggal_terbit" id="tanggal_terbit" readonly><br>
        @endif
        <input type="file" name="bukti_pembayaran" id="bukti_pembayaran"><br>
        <input type="submit" value="Order">
    </form>
    @if ($errors->any())
        <ul>
            @foreach ($errors->all() as $e)
                <li>{{$e}}</li>
            @endforeach
        </ul>
    @endif

</body>
</html>
